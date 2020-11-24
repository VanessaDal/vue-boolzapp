var app=new Vue({
    el: '#app',
    data:{
        active:0,
        contatti:[{
            nome:"Billy Ballo",
            anteprima:"ok...",
            img:"img/avatar_2.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:true,
            chat:[{
                ricevuto:"ciao sono billy ballo"
            }]
            },
            {
            nome:"Herbert Ballerina",
            anteprima:"ok...",
            img:"img/avatar_3.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
                ricevuto:"ciao sono herbert"
            }]
            },
            {
            nome:"Anna Pannocchia",
            anteprima:"ok...",
            img:"img/avatar_4.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
            ricevuto:"ciao sono Anna"
            }]
            },
            {
            nome:"Riccardino Fuffolo",
            anteprima:"ok...",
            img:"img/avatar_5.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
                ricevuto:"ciao sono Riccardino"
            }]
            }
        ]
        },
        
    
 
        
    methods:{
        activeChat: function(index) {
            this.chatIndex = index;
            this.users.map(function(user, index) {
                user.selected = user.selected === this.chatIndex;
                return user;
            })
            this.users[index].selected=true;
        }

    //     submitText:function(){
    //         if(this.todo.includes(this.text)===false){
    //         this.todo.push(this.text);
    //         this.text="";
    //         console.log(this.todo)}
    //         else{alert("This task already exist")}
    //     },
    }
})