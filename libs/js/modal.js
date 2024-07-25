
export class modal{
    constructor(){
        this.modals = document.querySelector('#modals')
        this.modal = this.modals.querySelector('.modal')
        this.box = this.modal.querySelector('.box')
    }


    // --> Affichage et supression de la modale
    CloseModal = ()=>{
        this.modal.removeAttribute('show')
       
        
    }

}


