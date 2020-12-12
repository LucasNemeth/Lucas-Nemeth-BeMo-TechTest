
// import vmodal from 'vue-js-modal'
// Vue.use(vmodal)
// wanted to use vmodal in order to drag the todo-cards
let todo =""; 

new Vue({
    el:'#card',
    data:{
        userInput:'',
        title:'',
    },
    methods:{
        onEnter(event){
            //essentially tried it so that on enter, it stores the user input and saves it as the Title, unfortunately, didn't quite work out that way
            event.preventDefault();
            this.userInput = this.title;
            console.log(title);
            return{
                userInput
            }
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
                //Much like
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
    el:'#addColumn',
    methods:{
        addAColumn:function(event){
            if(event){
                //on click add a new column
                //when column generates, opens up input to type in columnTitle. 
                //follow same function as createTitle
            }
        }
    }
})