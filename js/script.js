var app=new Vue({
    el: '#app',
    data:{
        active:0,
        text: '',
        search_user:"",
        contatti:[
            {
                nome:"Billy Ballo",
                anteprima:"ok...",
                img:"img/avatar_2.jpg",
                accesso:"22/11/2020 16:15",
                chat:[
                    {
                        testo:"ciao sono billy ballo",
                        time: "22/11/2020 16:15",
                        status:"received"
                    },
                    {
                        testo:"ciao",
                        time: "22/11/2020 16:15",
                        status:"sent"
                    }  
                ],
                filter: true
            },
            {
                nome:"Herbert Ballerina",
                anteprima:"ok...",
                img:"img/avatar_3.jpg",
                accesso:"22/11/2020 16:15",
                chat:[
                    {
                        testo:"ciao sono herbert",
                        time: "22/11/2020 16:15",
                        status:"received"
                    },
                    {
                        testo:"ciao",
                        time: "22/11/2020 16:15",
                        status:"sent"
                    }
                ],
                filter: true
            },
            {
                nome:"Anna Pannocchia",
                anteprima:"ok...",
                img:"img/avatar_4.jpg",
                accesso:"22/11/2020 16:15",
                chat:[
                    {
                        testo:"ciao sono Anna",
                        time: "22/11/2020 16:15",
                        status:"received"
                    },
                    {
                        testo:"ciao",
                        time: "22/11/2020 16:15",
                        status:"sent"
                    } 
                ],
                filter: true
            },
            {
                nome:"Riccardino Fuffolo",
                anteprima:"ok...",
                img:"img/avatar_5.jpg",
                accesso:"22/11/2020 16:15",
                chat:[
                    {
                        testo:"ciao sono Riccardino",
                        time: "22/11/2020 16:15",
                        status:"received"
                    },
                    {
                        testo:"ciao sono Riccardino000",
                        time: "22/11/2020 16:16",
                        status:"received"
                    },
                    {
                        testo:"ciao",
                        time: "22/11/2020 16:15",
                        status:"sent"
                    }
                ],
                filter: true
            }
        ]
    },
        
    methods:{
        activeChat: function(index) {
            this.active = index;
        },

        chatBot:function(){
            this.contatti[this.active].chat.push({
                testo: "che vuoi?",
                time: "22/11/2020 16:15",
                status:"received"
            });
        },

        timedChatBot:function(){
            setTimeout(this.chatBot,1000)
        },
        
        submitText:function(){
            console.log (this.text)

            //inserire il nostro messaggio!
            this.contatti[this.active].chat.push({
                testo: this.text,
                time: "22/11/2020 16:15",
                status:"sent"
            })

            this.text="";
        },
        filterChat:function(){
            this.contatti.forEach(utente => {
                if (utente.nome.toLowerCase().includes(this.search_user.toLowerCase())) {
                    utente.filter = true;
                } else {
                    utente.filter = false;
                };
            });
        },

        removeMessage:function(i){
            this.contatti[this.active].chat.splice(i, 1);
        },

    }
})