const App = Vue.createApp({
    data() {
      return {
        show: true,
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
                "image":"../images/projects/ip-tracker.png",
                "link":"https://ip-loca.netlify.app",
                "github":"https://github.com/ohienstephen/IP-Locator",
                "description":"Need to track an IP? This app helps you track Ip Address and displays the location on the a map for you."
        
            },
            {
                "id":3,
                "title":"Countriz",
                "technologies":"HTML5, CSS3, JavaScript, API, Axios, Vue.js C#",
                "image":"../images/projects/countriz.png",
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
                "description":"Tutor Pro is an E-Learning platform for college students. The aim of this project is to give Nigeria students access to online video lecture on various courses",
        
            }
        ]
      }
    },
    created(){
    }
  })
  
App.mount('#projects')
  