var app=new Vue({
    el: '#app',
    data:{
        contatti:[{
            nome:"Billy Ballo",
            anteprima:"ok...",
            img:"img/avatar_2.jpg",
            chat:[{
                ricevuto:"ciao sono billy ballo"
            },
            {
            nome:"Herbert Ballerina",
            anteprima:"ok...",
            img:"img/avatar_3.jpg",
            chat:[{
                ricevuto:"ciao sono herbert"
            },
            {
            nome:"Anna Pannocchia",
            anteprima:"ok...",
            img:"img/avatar_4.jpg",
            chat:[{
            ricevuto:"ciao sono Anna"
            },
            {
            nome:"Riccardino Fuffolo",
            anteprima:"ok...",
            img:"img/avatar_5.jpg",
            chat:[{
                ricevuto:"ciao sono Riccardino"
            }]
        
    
        }],
        
        
    },
    methods:{
        submitText:function(){
            if(this.todo.includes(this.text)===false){
            this.todo.push(this.text);
            this.text="";
            console.log(this.todo)}
            else{alert("This task already exist")}
        },

        // removeText:function(i){
        //     this.todo.splice(i,1)
        // },

        // editText:function(i){
        //     var a=prompt("type a new text");
        //     // this.todo.splice(i,1);
        //     // this.todo.push(a)
        //     this.todo[i]=a;
        //     this.$forceUpdate()
        // }
    }
})