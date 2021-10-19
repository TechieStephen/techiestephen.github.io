const App = {
    data() {
      return {
        counter: 50,
        projects = []
      }
    },
    created(){
        console.log(this.counter)
    }
  }
  
  Vue.createApp(App).mount('#projects')
  