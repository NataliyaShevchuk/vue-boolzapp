import importedUsersList from "./usersList.js";

//dall'oggetto globale Vue, estraggo in una variabile la funzione CreateApp
const  {createApp} = Vue;

createApp ({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
            usersList: importedUsersList,
            selectedUser: null, //rappresenta l'utente che ho cliccato
            textInput: " ",
            
        }
    },
    methods: {
        
        onNewMessageTextInput(){
            this.selectedUser.messages.push({
                hour: luxon.DateTime.now().toFormat('dd/MM HH:mm'),
                message: this.textInput,
                status: 'sent'
            })
            this.textInput = " ";
            setTimeout(this.okMessageFromUser, 1000);
        },
        okMessageFromUser (){
                this.selectedUser.messages.push({
                    status: 'received',
                    hour: luxon.DateTime.now().toFormat('dd/MM HH:mm'),
                    message: 'Okay',
                })
        }
    },
    beforeMount (){ // in questo modo ancora prima che lui stampi l'html io li assegno un valore alla variabile e 
        // e poi quando lui stamperà l'html, la variabile avrà già un valore
        this.selectedUser = this.usersList[0];  
    },
}).mount("#app")
