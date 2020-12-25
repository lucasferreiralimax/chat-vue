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
      let root = document.documentElement
      if(type) {
        root.style.setProperty("--main-color", "#fff")
        root.style.setProperty("--main-bg-color", "#333")
        this.$store.commit("updateDarkMode", true)
        localStorage.setItem("dark", true)
      } else {
        root.style.setProperty("--main-color", "#000")
        root.style.setProperty("--main-bg-color", "#fff")
        this.$store.commit("updateDarkMode", false)
        localStorage.setItem("dark", false)
      }
    }
  }
}