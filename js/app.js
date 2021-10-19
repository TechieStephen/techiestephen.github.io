const App = {
    data() {
      return {
        counter: 50,
        projects : []
      }
    },
    created(){
        console.log(this.counter)
        alert(123)
    }
  }
  
Vue.createApp(App).mount('#projects')
  