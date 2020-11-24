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
                ricevuto:"ciao sono billy ballo",
                status:"received"
            }]
            },
            {
            nome:"Herbert Ballerina",
            anteprima:"ok...",
            img:"img/avatar_3.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
                ricevuto:"ciao sono herbert",
                status:"received"
            }]
            },
            {
            nome:"Anna Pannocchia",
            anteprima:"ok...",
            img:"img/avatar_4.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
            ricevuto:"ciao sono Anna",
            status:"received"
            }]
            },
            {
            nome:"Riccardino Fuffolo",
            anteprima:"ok...",
            img:"img/avatar_5.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            chat:[{
                ricevuto:"ciao sono Riccardino",
                status:"received"
            }]
            }
        ]
        },
        
    methods:{
        activeChat: function(index) {
            this.active = index;
            this.contatti.map(function(user) {
                user.selezionato = user.selezionato === this.active;
                return user;
            })
            this.contatti[index].selezionato=true;
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