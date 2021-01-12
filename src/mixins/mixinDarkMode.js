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
      type ? this.setColors(['#fff', '#333']) : this.setColors(['#000', '#fff'])
      this.$store.commit("updateDarkMode", type)
      localStorage.setItem("dark", type)
    },
    setColors (colors) {
      let root = document.documentElement
      root.style.setProperty("--main-color", colors[0])
      root.style.setProperty("--main-bg-color", colors[1])
    }
  }
}
