let btn = document.getElementById("btn");
let capture = document.getElementById("capture");
let item1 = document.getElementById("item1");
let task = document.getElementById("task");

let i = 0, enteredSize;

task.innerText = " " + i + " tasks";

class TodoList {

    constructor(isSelected, id)  {
        this.isSelected = isSelected
        this.id = id
    }

    getIsSelected() {
        return this.isSelected
    }

    setIsSelected(isSelected) {
        this.isSelected = isSelected
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    date(today) {   
    
        document.getElementById("date").innerText =  today.toLocaleString('en-En', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
    
        let day = document.getElementById("day")
    
        switch(today.getDay()){
            case 1: 
                day.innerText = "Monday";
                break;
            case 2:
                day.innerText = "Tuesday";
                break;
            case 3:
                day.innerText = "Wednesday";
                break;
            case 4:
                day.innerText = "Thursday";
                break;
            case 5:
                day.innerText = "Friday";
                break;
            case 6:
                day.innerText = "Saturday";
                break;
            case 0:
                day.innerText = "Sunday";
                break;        
        }
    }

    selection(input, inputSelection, paragraph, parent) {
        let nombreDeClic = 0
        

        input.addEventListener("click", () => {
            nombreDeClic++
            if(inputSelection === true) {
                paragraph.style.textDecoration = "none";
                document.getElementById(parent.id).checked = false;
                inputSelection = document.getElementById(parent.id).checked = false;
                task.innerText = " " + ++i + " tasks";
                this.id = 0
                this.isSelected = false
            } else {
                paragraph.style.textDecoration = "line-through";
                document.getElementById(parent.id).checked = true;
                inputSelection = document.getElementById(parent.id).checked = true;
                (i > 0) ? task.innerText = " " + --i + " tasks" : "";
                this.id = document.getElementById(parent.id).id                
                this.isSelected = true
            }

        });

    }

    suppression(deleteBtn, content, parent){
        
        let id =  document.getElementById(parent.id).id
       
        document.getElementById(deleteBtn.id).addEventListener("click", () => {
            document.getElementById(content.id).remove();

            if(i <= 0) {
                i = 0 
            } else {

               if((this.getIsSelected() === true) && (this.getId() === id)) {
                    task.innerText = " " + i + " tasks"
               } else {
                    task.innerText = " " + --i + " tasks";
               }

            }            
            
        });
            
    }

}

/**
 * Si on clic sur le bounton on ajoute un input de type radio et un
 * paragraphe contenant le text html écrit dans le input en bas
 */

btn.addEventListener("click", () => {
    
    enteredSize = capture.value
    
    if(enteredSize.length <= 30 && enteredSize.length > 0) {

        task.innerText = " " + ++i + "  tasks";

        // Création d'une div qui sera ajouté dans la div display 
        let content = document.createElement("div");
        content.id = Math.random().toString(36).substring(7);
        content.className = 'item';
        display.appendChild(content);     

        // Création de la div dans la quelle sera afficher l'input de type radio et le text
        let btnRadioAndParagraphDiv = document.createElement("div")
        btnRadioAndParagraphDiv.className = 'btnRadioAndParagraphDiv'
        btnRadioAndParagraphDiv.id = Math.random().toString(36).substring(7);
        content.appendChild(btnRadioAndParagraphDiv)// ajout de la div dans la div qui a pour classe item

        //  Création d'un input de type radio et génération d'un idenfiant pour l'input
        let parent = document.createElement("input")
        parent.id = Math.random().toString(36).substring(7);
        parent.type = 'radio'
        btnRadioAndParagraphDiv.appendChild(parent)// ajout de l'input dans la div qui a pour classe btnRadioAndParagraphDiv

        
        //  Création d'un paragraphe et génération d'un identifiant pour le paragraphe
        let paragraph = document.createElement("p")
        paragraph.id = Math.random().toString(36).substring(7);
        btnRadioAndParagraphDiv.appendChild(paragraph)// ajout du paragraphe dans la div qui a pour classe btnRadioAndParagraphDiv

        // Création du bouton de suppression
        let deleteBtnDiv = document.createElement("div")
        deleteBtnDiv.className = 'deleteBtnDiv'
        content.appendChild(deleteBtnDiv)// ajout de la div dans la div qui a pour classe item

        let deleteBtn = document.createElement("i");
        deleteBtn.id = Math.random().toString(36).substring(7);
        deleteBtn.className = 'fas fa-trash-alt'
        deleteBtnDiv.appendChild(deleteBtn)// ajout du bouton de suppression dans la div qui a pour classe deleBtnDiv

        paragraph.innerText += capture.value;
        capture.value = "";

        // Récupération de l'id du paragraphe
        paragraph = document.getElementById(paragraph.id)

        // Par défaut l'input de type radio est désélectioné, si on clic une fois il s'active et vice-versa
        let inputSelection = document.getElementById(parent.id).checked = false;
        let input = document.getElementById(parent.id);

        todoList.selection(input, inputSelection, paragraph, parent);

        todoList.suppression(deleteBtn, content, parent);

    } else {
        
        window.setTimeout(() => {
            document.getElementById("alert-message").style.display = 'block';
        }, 50);

        window.setTimeout(() => {
            document.getElementById("alert-message").style.display = 'none';
        }, 3000)

    }    
    
});

todoList = new TodoList(null, null);

today = new Date();

todoList.date(today);