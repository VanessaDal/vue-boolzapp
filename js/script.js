var app=new Vue({
    el: '#app',
    data:{
        active:0,
        text: '',
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
                        status:"sent"
                    }  
                ]
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
                        status:"sent"
                    }
                ]
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
                        status:"sent"
                    } 
                ]
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
                        status:"sent"
                    }
                ]
            }
        ]
    },
        
    methods:{
        activeChat: function(index) {
            this.active = index;
            /*this.contatti.map(function(user) {
                user.selezionato = user.selezionato === this.active;
                return user;
            })
            this.contatti[index].selezionato=true;*/
        },

        submitText:function(){
            console.log (this.text)

            //inserire il nostro messaggio!
            this.contatti[this.active].chat.push({
                testo: this.text,
                status:"sent"
            })

            this.text="";
            /*this.contatti[this.active].chat.push({
                inviato:this.text,
                time: "22/11/2020 16:16",
                status:"sent"});
            */
        },
    }
})