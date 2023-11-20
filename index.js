const {createApp} = Vue
createApp({
    data(){
        return{
            email : []
        }
    },
    methods : {
        scaricaEmail : function(){
            for(let i=0; i<10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    if(response.data.success == true){
                        this.email.push(response.data.response);
                    }
                });
            }
        }
    },
    mounted(){
        this.scaricaEmail();
    }
}).mount('#app')