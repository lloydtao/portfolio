<template>
  <div>
    <div
      id="canvas"
      class="relative border-2 border-gray-200 border-dashed rounded-xl overflow-hidden mx-auto"
      style="height: 480px; caret-color: transparent"
    >
      <div
        class="absolute bottom-0 left-1/2 pointer-events-none"
        style="width: 360px"
      >
        <img
          src="https://www.pngkey.com/png/full/14-143498_file-history-v-ak47-cs-go.png"
          class="pointer-events-none"
        />
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <img
          src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8fb82ffca3fb5ad.png"
          class="w-8 pointer-events-none"
        />
      </div>
      <div
        id="blocker"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div id="instructions" class="bg-gray-50 rounded shadow px-8 py-5">
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold text-center text-gray-900">
              Click to play
            </h2>
            <div class="mt-1 text-gray-700">
              <p class="text-center">Move: WASD, Space</p>
              <p class="text-center">Camera: Mouse</p>
              <p class="text-center">Pause: Esc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Vector3,
  Color,
  PerspectiveCamera,
  Scene,
  Fog,
  HemisphereLight,
  Raycaster,
  PlaneGeometry,
  Float32BufferAttribute,
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
  MeshPhongMaterial,
  WebGLRenderer,
} from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { performance } from 'universal-perf-hooks'

let camera, scene, renderer, controls

const objects = []

let raycaster

let moveForward = false
let moveBackward = false
let moveLeft = false
let moveRight = false
let canJump = false

let gravity_constant = 1.375
let jump_velocity = 50

let prevTime = performance.now()
const velocity = new Vector3()
const direction = new Vector3()
const vertex = new Vector3()
const color = new Color()

export default {
  name: 'ThreeTest',
  data() {
    return {}
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.getElementById('canvas')
      camera = new PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        1,
        1000
      )
      camera.position.y = 10

      scene = new Scene()
      scene.background = new Color(0xffffff)
      scene.fog = new Fog(0xffffff, 0, 750)

      const light = new HemisphereLight(0xeeeeff, 0x777788, 0.75)
      light.position.set(0.5, 1, 0.75)
      scene.add(light)

      controls = new PointerLockControls(camera, document.body)

      const blocker = document.getElementById('blocker')
      const instructions = document.getElementById('instructions')

      instructions.addEventListener('click', function () {
        controls.lock()
      })

      controls.addEventListener('lock', function () {
        instructions.style.display = 'none'
        blocker.style.display = 'none'
      })

      controls.addEventListener('unlock', function () {
        blocker.style.display = 'block'
        instructions.style.display = ''
      })

      scene.add(controls.getObject())

      const onKeyDown = function (event) {
        if (controls.isLocked) {
          event.preventDefault()
        }
        switch (event.code) {
          case 'ArrowUp':
          case 'KeyW':
            moveForward = true
            break

          case 'ArrowLeft':
          case 'KeyA':
            moveLeft = true
            break

          case 'ArrowDown':
          case 'KeyS':
            moveBackward = true
            break

          case 'ArrowRight':
          case 'KeyD':
            moveRight = true
            break

          case 'Space':
            if (canJump === true) velocity.y += jump_velocity
            canJump = false
            break
        }
      }

      const onKeyUp = function (event) {
        if (controls.isLocked) {
          event.preventDefault()
        }
        switch (event.code) {
          case 'ArrowUp':
          case 'KeyW':
            moveForward = false
            break

          case 'ArrowLeft':
          case 'KeyA':
            moveLeft = false
            break

          case 'ArrowDown':
          case 'KeyS':
            moveBackward = false
            break

          case 'ArrowRight':
          case 'KeyD':
            moveRight = false
            break
        }
      }

      document.addEventListener('keydown', (e) => onKeyDown(e))
      document.addEventListener('keyup', (e) => onKeyUp(e))

      raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10)

      // floor

      let floorGeometry = new PlaneGeometry(2000, 2000, 100, 100)
      floorGeometry.rotateX(-Math.PI / 2)

      // vertex displacement

      let position = floorGeometry.attributes.position

      for (let i = 0, l = position.count; i < l; i++) {
        vertex.fromBufferAttribute(position, i)

        vertex.x += Math.random() * 20 - 10
        vertex.y += Math.random() * 2
        vertex.z += Math.random() * 20 - 10

        position.setXYZ(i, vertex.x, vertex.y, vertex.z)
      }

      floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices

      position = floorGeometry.attributes.position
      const colorsFloor = []

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        )
        colorsFloor.push(color.r, color.g, color.b)
      }

      floorGeometry.setAttribute(
        'color',
        new Float32BufferAttribute(colorsFloor, 3)
      )

      const floorMaterial = new MeshBasicMaterial({ vertexColors: true })

      const floor = new Mesh(floorGeometry, floorMaterial)
      scene.add(floor)

      // objects

      const boxGeometry = new BoxGeometry(5, 5, 5).toNonIndexed()

      position = boxGeometry.attributes.position
      const colorsBox = []

      for (let i = 0, l = position.count; i < l; i++) {
        color.setHSL(
          Math.random() * 0.3 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        )
        colorsBox.push(color.r, color.g, color.b)
      }

      boxGeometry.setAttribute(
        'color',
        new Float32BufferAttribute(colorsBox, 3)
      )

      for (let i = 0; i < 64; i++) {
        const boxMaterial = new MeshPhongMaterial({
          specular: 0xffffff,
          flatShading: true,
          vertexColors: true,
        })
        boxMaterial.color.setHSL(
          Math.random() * 0.2 + 0.5,
          0.75,
          Math.random() * 0.25 + 0.75
        )

        const box = new Mesh(boxGeometry, boxMaterial)
        box.position.x = Math.floor(Math.random() * 10 - 10) * 5
        box.position.y = Math.floor(Math.random() * 10) * 5 + 2.5
        box.position.z = Math.floor(Math.random() * 10 - 10) * 5

        scene.add(box)
        objects.push(box)
      }

      //
      renderer = new WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)

      //

      window.addEventListener('resize', this.onWindowResize)
    },
    animate() {
      requestAnimationFrame(this.animate)

      const time = performance.now()

      if (controls.isLocked === true) {
        raycaster.ray.origin.copy(controls.getObject().position)
        raycaster.ray.origin.y -= 2.5

        const intersections = raycaster.intersectObjects(objects, false)

        const onObject = intersections.length > 0

        const delta = (time - prevTime) / 1000

        velocity.x -= velocity.x * 10.0 * delta
        velocity.z -= velocity.z * 10.0 * delta
        velocity.y -= gravity_constant * 100.0 * delta // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward)
        direction.x = Number(moveRight) - Number(moveLeft)
        direction.normalize() // this ensures consistent movements in all directions

        if (moveForward || moveBackward)
          velocity.z -= direction.z * 400.0 * delta
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta

        if (onObject === true) {
          velocity.y = Math.max(0, velocity.y)
          canJump = true
        }

        controls.moveRight(-velocity.x * delta)
        controls.moveForward(-velocity.z * delta)

        controls.getObject().position.y += velocity.y * delta // new behavior

        if (controls.getObject().position.y < 10) {
          velocity.y = 0
          controls.getObject().position.y = 10

          canJump = true
        }
      }

      prevTime = time

      renderer.render(scene, camera)
    },
    onWindowResize() {
      const container = document.getElementById('canvas')
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()

      renderer.setSize(container.clientWidth, container.clientHeight)
    },
  },
}
</script>
