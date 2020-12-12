
// import vmodal from 'vue-js-modal'
// Vue.use(vmodal)
// wanted to use vmodal in order to drag the todo-cards
let todo =""; 

new Vue({
    el:'#card',
    data:{
        userInput:'',
        title:'',
        editedTodo:null,
        message:'Does this work?'
    },
    methods:{
        onEnter(){
            this.userInput = this.title
        },
        editTodo: function(todo){
            this.editedTodo = todo;
        },
    }
})

let columnTitle = new Vue ({
    el:'#list-header',
    data:{
        columnTitle:''
    },
    methods:{
        createTitle: function(event){

            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

let newCard = new Vue({
    el:'#addCard',
    methods:{
        addACard: function(event){
            if(event){
                //on click, create a new todo__card, 
            }
        }
    }
})

let newColumn = new Vue({
    el:'#addColumn'
})