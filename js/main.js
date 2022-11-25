import importedUsersList from "./usersList";

//dall'oggetto globale Vue, estraggo in una variabile la funzione CreateApp
const  {createApp} = Vue;

createApp({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
            usersList: importedUsersList,
        }
    }
}).mount("#app")
