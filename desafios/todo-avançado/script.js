//######################################################## SELEÇÃO DE ELEMENTOS #####################################################

const formAddTask = document.querySelector('.formulario-adicionar-tarefa')
const inputAddTask = document.querySelector('input#itarefa')
const formEditTask = document.querySelector('.formulario-editar-tarefa')
const editTask = document.querySelector('input#ieditar')
const form_ = document.querySelector('.itarefa')
const todofm = document.querySelector('input#itarefa')

//############################################################## FUNÇÕES ############################################################


//-------------------------------------------------- FUNÇÃO DE ADICIONAR A TAREFA ---------------------------------------------------
function addTask(reload) {
    reload.preventDefault()
    const addTaskValue = inputAddTask.value

    if (addTaskValue){
        saveTask(addTaskValue)
        console.log(saveTask())
    }
}

function saveTask() {
    const divTask = document.createElement('div')
    divTask.classList('tarefa-pai')
    addTaskChild(divTask)
}

function addTaskChild(divTask) {
    const itemTask = document.createElement('div')
    itemTask.classList('tarefa-filho')
    divTask.appendChild(itemTask)
    textTaskParam(itemTask)
    containerButtons(itemTask)
}

function textTaskParam(itemTask) {
    const textTask = document.createElement('p')
    textTask.text = addTaskValue
    itemTask.appendChild(textTask)
}

function containerButtons(itemTask) {
    const divButtons = document.createElement('div')
    divButtons.classList('buttons-edit-feito-clean')
    itemTask.appendChild(divButtons)
    buttons(divButtons)
}

function buttons(divButtons) {
    const finishButton = document.createElement('button')
    finishButton.classList('finish')
    const editButton = document.createElement('button')
    editButton.classList('editar')
    const cleanButton = document.createElement('button')
    cleanButton.classList('apagar')
    divButtons.appendChild(finishButton, editButton, cleanButton)
    icones()
}

function icones() {
    const iconCheck = document.createElement('i')
    iconCheck.classList('fa-solid', 'fa-check')
    const iconEdit = document.createElement('i')
    iconEdit.classList('fa-solid', 'fa-check')
    const iconErased = document.createElement('i')
    iconErased.classList('fa-solid', 'fa-xmark')
}

//---------------------------------------------- FECHAMENTO DA FUNÇÃO ADICIONAR TAREFA ----------------------------------------------



//######################################################### EVENTOS ################################################################



//--------------------------------------------------- EVENTO DE ADICIONAR TAREFA ----------------------------------------------------

const eventAddTask = document.querySelector('#botao-adicionar-tarefa')
eventAddTask.addEventListener('click', addTask)

//----------------------------------------- FECHAMENTO DO EVENTO DE ADICIONAR TAREFA ------------------------------------------------

