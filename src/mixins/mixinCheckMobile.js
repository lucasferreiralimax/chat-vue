export const mixinCheckMobile = {
  data () {
    return {
      isMobile: null,
      mediaQuery: null
    }
  },
  created () {
    this.mediaQuery = window.matchMedia('(min-width: 830px)')
    this.mediaQuery.addListener(this.doCheckMobile)
    this.doCheckMobile()
  },
  methods: {
    doCheckMobile() {
      this.isMobile = this.mediaQuery.matches
    }
  }  
}