const App = Vue.createApp({
    data() {
      return {
        counter: 50
      }
    },
    created(){
        console.log(this.counter)
    }
  })
  
App.mount('#projects')
  