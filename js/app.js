const App = Vue.createApp({
    data() {
      return {
        counter: 50,
        projects:[
            {
                "id":1,
                "title":"EasyBank",
                "technologies":"HTML5, CSS3, JavaScript, SASS",
                "image":"../images/projects/easybank.png",
                "link":"https://eazzybank.netlify.app",
                "github":"https://github.com/ohienstephen/EasyBank",
                "description":"EasyBank is an imaginary FinTech landing page, its a simply yet classic design."
        
            },
            {
                "id":2,
                "title":"IP Locator",
                "technologies":"HTML5, CSS3, JavaScript, API, Open Map",
                "image":"../images/projects/ip-tracker.jpg",
                "link":"https://ip-loca.netlify.app",
                "github":"https://github.com/ohienstephen/IP-Locator",
                "description":"Need to track an IP? This app helps you track Ip Address and displays the location on the a map for you."
        
            },
            {
                "id":3,
                "title":"countriz",
                "technologies":"HTML5, CSS3, JavaScript, API, Axios, Vue.js C#",
                "image":"../images/projects/countriz.jpg",
                "link":"https://os-countries.netlify.app",
                "github":"https://github.com/ohienstephen/Countriz",
                "description":"Countriz is an app that displays countries and their basic information. The app also has a color theme switcher to switch from light to dark theme"
        
            },
            {
                "id":4,
                "title":"Tutor Pro",
                "technologies":"HTML5, CSS3, JavaScript, API, Axios, Vue.js C#, Asp.Net Core",
                "image":"../images/projects/tutorpro.png",
                "link":"",
                "github":"",
                "description":"E-Learning Platform for College Students. Built using Asp.Net Core Web API, C# and Vue CLI. The aim of this project is to give Nigeria students access to online video lectures on their various courses",
        
            },
            {
                "id":5,
                "title":"A Mini StackOverFlow Clone",
                "technologies":"HTML5, CSS3, JavaScript, API, Axios, Vue.js, Python, Django",
                "image":"../images/projects/tutorpro.png",
                "link":"",
                "github":"",
                "description":"Code is a stackoverflow clone built using Vue.js, Python and Django framework"
            }
        ]
      }
    },
    created(){
        console.log(this.counter)
    }
  })
  
App.mount('#projects')
  