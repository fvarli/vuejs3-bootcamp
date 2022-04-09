const app = Vue.createApp({
    data(){
        return {
            title:"Vue.js Bootcamp first day", 
            content: "Lorem ipsum dolor sit amet..",
            eduflow: {
                title: "Test Title",
                target: "_blank",
                url: "https://ferzendervarli.com",
                alt: "Test Alt"
            },
            owner: "fred",
            coords: {
                x: 0,
                y: 0,
            }
        };
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        updateCoords(message, event){
            console.log(message, event.x, event.y)
            this.changeTitle(`${'X: ' + event.x},${' Y: ' + event.y}`)
            this.coords = {
                x: 'X: ' + event.x,
                y: 'Y: ' + event.y
            }
        }
    }
}).mount("#app");