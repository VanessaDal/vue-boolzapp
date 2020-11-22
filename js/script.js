var write=new Vue({
    el: '#app',
    data:{
        todo:[],
        text:""
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