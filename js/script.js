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
            text:"",
            chat:[{
                ricevuto:"ciao sono billy ballo",
                time: "22/11/2020 16:15",
                status:"received"
            }]
            },
            {
            nome:"Herbert Ballerina",
            anteprima:"ok...",
            img:"img/avatar_3.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            text:"",
            chat:[{
                ricevuto:"ciao sono herbert",
                time: "22/11/2020 16:15",
                status:"received"
            },
                {inviato:"ciao",
                status:"sent"}]
            },
            {
            nome:"Anna Pannocchia",
            anteprima:"ok...",
            img:"img/avatar_4.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            text:"",
            chat:[{
            ricevuto:"ciao sono Anna",
            time: "22/11/2020 16:15",
            status:"received"
            }]
            },
            {
            nome:"Riccardino Fuffolo",
            anteprima:"ok...",
            img:"img/avatar_5.jpg",
            accesso:"22/11/2020 16:15",
            selezionato:false,
            text:"",
            chat:[{
                ricevuto:"ciao sono Riccardino",
                time: "22/11/2020 16:15",
                status:"received"
            },
            {ricevuto:"ciao sono Riccardino000",
                time: "22/11/2020 16:16",
                status:"received"
            }
            ]
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
        },

        submitText:function(){
            this.chat.push({
                inviato:this.text,
                status:"sent"});
            this.text="";
        },
    }
})