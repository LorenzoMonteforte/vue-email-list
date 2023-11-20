const {createApp} = Vue
createApp({
    data(){
        return{
            email : [],
            numeroEmail : 10,
            finish : false
        }
    },
    methods : {
        scaricaEmail : function(){
            for(let i=0; i<this.numeroEmail; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    if(response.data.success == true){
                        this.email.push(response.data.response);
                    }
                    if(i == (this.numeroEmail-1)){
                        this.finish = true;
                    }
                });
            }
        }
    },
    mounted(){
        this.scaricaEmail();
    }
}).mount('#app')