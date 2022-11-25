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
        }
    },
    methods: {

    },
    beforeMount (){ // in questo modo ancora prima che lui stampi l'html io li assegno un valore alla variabile e 
        // e poi quando lui stamperà l'html, la variabile avrà già un valore
        this.selectedUser = this.usersList[0];  
    }
}).mount("#app")
