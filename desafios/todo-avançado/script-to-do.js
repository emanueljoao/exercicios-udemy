//######################################################## SELEÇÃO DE ELEMENTOS #####################################################
//--------------------------------------------------------- ADIÇÃO DE TAREFAS -------------------------------------------------------
const formAddTask = document.querySelector('.formulario-adicionar-tarefa')
const inputAddTask = document.getElementById('itarefa')
const formEditTask = document.querySelector('.formulario-editar-tarefa')
const editTask = document.querySelector('input#ieditar')
const listTask = document.querySelector('div.lista-de-tarefas')
// ----------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------- TAREFAS CONCLUIDAS -------------------------------------------------------




//###################################################### DECLARAÇÕES DE VARIAVEIS ###################################################



//############################################################## FUNÇÕES ############################################################

//-------------------------------------------------- FUNÇÃO DE ADICIONAR A TAREFA ---------------------------------------------------

function addTask() {
    const divTask = document.createElement('div')
    divTask.classList.add('tarefa-pai')
    addTaskChild(divTask)
    linhaHrFunction(divTask)
}

function addTaskChild(divTask) {
    const divTaskChild = document.createElement('div')
    divTaskChild.classList.add('tarefa-filho', 'd-flex', 'm-3')
    divTask.appendChild(divTaskChild)
    addTaskText(divTaskChild, divTask)
    addTaskDivButtons(divTaskChild, divTask)
}

function linhaHrFunction(divTask) {
    const linhaHr = document.createElement('hr')
    divTask.appendChild(linhaHr)
}

function addTaskText(divTaskChild) {
    const taskText = document.createElement('p')
    taskText.textContent = inputAddTask.value
    divTaskChild.appendChild(taskText)
}

function addTaskDivButtons(divTaskChild, divTask) {
    const containerButtons = document.createElement('div')
    containerButtons.classList.add('botoes-editar-feito-limpar')
    divTaskChild.appendChild(containerButtons)
    Buttons(containerButtons, divTask)
}
function Buttons(containerButtons, divTask) {
    
    const finishButton = document.createElement('button')
    finishButton.classList.add('finish')
    containerButtons.appendChild(finishButton)
    
    const editButton = document.createElement('button')
    editButton.classList.add('editar')
    containerButtons.appendChild(editButton)
    
    const cleanButton = document.createElement('button')
    cleanButton.classList.add('apagar')
    containerButtons.appendChild(cleanButton)
    
    icons(finishButton,editButton, cleanButton, divTask)
}

function icons(finishButton,editButton, cleanButton, divTask) {
    
    const iconCheck = document.createElement('i')
    iconCheck.classList.add('fa-solid', 'fa-check')
    finishButton.appendChild(iconCheck)
    
    const iconEdit = document.createElement('i')
    iconEdit.classList.add('fa-solid', 'fa-edit')
    editButton.appendChild(iconEdit)
    
    const iconErased = document.createElement('i')
    iconErased.classList.add('fa-solid', 'fa-xmark')
    cleanButton.appendChild(iconErased)
    
    finishFunction(divTask)
}


function finishFunction(divTask) {
    listTask.appendChild(divTask)
    inpu
}

//-------------------------------------------------- EVENTO DE CONCLUIR TAREFA ------------------------------------------------------
//----------------------------------------------------- FUNÇÃO DE CONCLUIR TAREFA ---------------------------------------------------

const taskFinish = document.querySelectorAll('button.finish') 
taskFinish.forEach( taskFinish => { taskFinish.addEventListener('click', function() {
    
        const finishTask = document.querySelectorAll('div.tarefa-pai')
        finishTask.forEach(task => {task.classList.toggle('tarefa-feita-pai')})
        
        const finishTaskChild = document.querySelectorAll('div.tarefa-filho')
        finishTaskChild.forEach(task => task.classList.toggle('tarefa-feita'))
    
                   
    }
)})


//---------------------------------------------- FECHAMENTO DA FUNÇÃO ADICIONAR TAREFA ----------------------------------------------



//######################################################### EVENTOS ################################################################



//--------------------------------------------------- EVENTO DE ADICIONAR TAREFA ----------------------------------------------------
const addTaskListener = document.querySelector('button#botao-adicionar-tarefa')
addTaskListener.addEventListener('click', addTask)


//-----------------------------------------------------------------------------------------------------------------------------------




