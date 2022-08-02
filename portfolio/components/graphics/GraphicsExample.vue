<template>
  <div>
    <div id="canvas" class="flex h-64 mt-3 sm:mt-5" />
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

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
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
  },
}
</script>
