const App = Vue.createApp({
    data() {
      return {
        show: false,
        projects:[
            {
              "id":1,
              "title":"Nedytrades",
              "stack":["HTML5", "CSS3", "JavaScript", "SASS", "API", "Axios", "Vue.js", "C#", "Asp.Net Core"],
              "image":"../images/projects/nedytrades.png",
              "link":"https://nedytrades.com.ng",
              "github":"",
              "description":"A platform where you can convert your crypto currencies and gift cards to naira, They buy crypto currencies and all country’s GIFT CARDS at superb rates and pay swiftly. The idea was to develop a classsic  but yet user friendly interface."
      
          },
            {
                "id":2,
                "title":"EasyBank",
                "stack":["HTML5", "CSS3", "JavaScript", "SASS"],
                "image":"../images/projects/easybank.png",
                "link":"https://eazzybank.netlify.app",
                "github":"https://github.com/ohienstephen/EasyBank",
                "description":"EasyBank is an imaginary FinTech landing page, its a simply yet classic design."
        
            },
            {
                "id":3,
                "title":"IP Locator",
                "stack":["HTML5", "CSS3", "JavaScript", "API", "Open Map"],
                "image":"../images/projects/ip-tracker.png",
                "link":"https://ip-loca.netlify.app",
                "github":"https://github.com/ohienstephen/IP-Locator",
                "description":"Need to track an IP? This app helps you track Ip Address and displays the location on the a map for you."
        
            },
            {
                "id":4,
                "title":"Countriz",
                "stack":["HTML5", "CSS3", "JavaScript", "API", "Axios", "Vue.js", "C#"],
                "image":"../images/projects/countriz.png",
                "link":"https://os-countries.netlify.app",
                "github":"https://github.com/ohienstephen/Countriz",
                "description":"Countriz is an app that displays countries and their basic information. The app also has a color theme switcher to switch from light to dark theme"
        
            },
            {
                "id":5,
                "title":"Tutor Pro",
                "stack":["HTML5", "CSS3", "JavaScript", "API", "Axios", "Vue.js", "C#", "Asp.Net Core"],
                "image":"../images/projects/tutorpro.png",
                "link":"",
                "github":"",
                "description":"Tutor Pro is an E-Learning platform for college students. The aim of this project is to give Nigeria students access to online video lecture on various courses",
        
            }
        ],
        selected:{}
      }
    },
    methods:{
      showProject(id){
        this.projects.forEach(item => {
          if(item.id == id){
            this.selected = item
            this.show = true
            console.log(JSON.stringify(this.selected))
          }
        });
      }
    },
    created(){
      // this.showProject(1)
    }
  })
  
App.mount('#projects')
  