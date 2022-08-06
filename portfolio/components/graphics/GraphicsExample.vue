<template>
  <div>
    <div id="canvas" class="flex h-64 mt-3 sm:mt-5" />
    <div class="flex justify-center space-x-3 mt-5">
      <button
        class="rounded shadow bg-gray-50 text-gray-900 font-semibold px-5 py-1"
        v-on:click="decreaseCubeSize"
      >
        Smaller
      </button>
      <button
        class="rounded shadow bg-gray-50 text-gray-900 font-semibold px-5 py-1"
        v-on:click="increaseCubeSize"
      >
        Bigger
      </button>
    </div>
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      cube: {
        updated: false,
        width: 0.1,
        height: 0.1,
        depth: 0.1,
      },
    }
  },
  mounted() {
    this.init()
    this.animate()
    window.addEventListener('resize', this.resize, false)
  },
  methods: {
    init() {
      const container = document.getElementById('canvas')

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      )
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      const geometry = new Three.BoxGeometry(
        this.cube.width,
        this.cube.height,
        this.cube.depth
      )
      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      if (this.cube.updated) {
        this.mesh.geometry.dispose()
        this.mesh.geometry = new Three.BoxGeometry(
          this.cube.width,
          this.cube.height,
          this.cube.depth
        )
        this.cube.updated = false
      }
      this.renderer.render(this.scene, this.camera)
    },
    resize() {
      const container = document.getElementById('canvas')

      const SCREEN_WIDTH = container.clientWidth
      const SCREEN_HEIGHT = container.clientHeight

      this.camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
    },
    decreaseCubeSize() {
      if (
        this.cube.width < 0.15 ||
        this.cube.height < 0.15 ||
        this.cube.depth < 0.15
      ) {
        return
      }
      this.cube.width = this.cube.width - 0.1
      this.cube.height = this.cube.height - 0.1
      this.cube.depth = this.cube.depth - 0.1
      this.cube.updated = true
    },
    increaseCubeSize() {
      if (
        this.cube.width > 0.45 ||
        this.cube.height > 0.45 ||
        this.cube.depth > 0.45
      ) {
        return
      }
      this.cube.width = this.cube.width + 0.1
      this.cube.height = this.cube.height + 0.1
      this.cube.depth = this.cube.depth + 0.1
      this.cube.updated = true
    },
  },
}
</script>
