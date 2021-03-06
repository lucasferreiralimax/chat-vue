import { mapState } from 'vuex'

export const mixinDarkMode = {
  computed: mapState({
    dark: state => state.dark
  }),
  created () {
    this.darkMode(JSON.parse(localStorage.getItem("dark")))
  },
  methods: {
    togleMode () {
      this.$store.commit("updateDarkMode", !this.dark)
      this.darkMode(this.dark)
    },
    darkMode (type) {
      type ? this.setColors(['#fff', '#333', '0,0,0', '.25']) : this.setColors(['#000', '#fff', '255,255,255', '.1'])
      this.$store.commit("updateDarkMode", type)
      localStorage.setItem("dark", type)
    },
    setColors (colors) {
      let root = document.documentElement
      root.style.setProperty("--main-color", colors[0])
      root.style.setProperty("--main-bg-color", colors[1])
      root.style.setProperty("--main-bg-color-rgba-dark", colors[2])
      root.style.setProperty("--main-alpha", colors[3])
    }
  }
}
