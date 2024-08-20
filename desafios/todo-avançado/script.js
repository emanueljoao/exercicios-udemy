//######################################################## SELEÇÃO DE ELEMENTOS #####################################################


const formAddTask = document.querySelector('.formulario-adicionar-tarefa')
const inputAddTask = document.getElementById('itarefa')
const formEditTask = document.querySelector('.formulario-editar-tarefa')
const editTask = document.querySelector('input#ieditar')
const form_ = document.querySelector('.itarefa')
// const todofm = document.querySelector('input#itarefa')
const listTask = document.querySelector('div.lista-de-tarefas')


//###################################################### DECLARAÇÕES DE VARIAVEIS ###################################################


const finishButton = document.createElement('button')
const editButton = document.createElement('button')
const cleanButton = document.createElement('button')


//############################################################## FUNÇÕES ############################################################


//-------------------------------------------------- FUNÇÃO DE ADICIONAR A TAREFA ---------------------------------------------------

function addTask(reload) {
    reload.preventDefault()
    saveTask(listTask)
    // console.log()
}

function saveTask(listTask) {
    const divTask = document.createElement('div')
    divTask.classList.add('tarefa-pai')
    listTask.appendChild(divTask)
    addTaskChild(divTask)
}

function addTaskChild(divTask) {
    const itemTask = document.createElement('div')
    itemTask.classList.add('tarefa-filho', 'd-flex', 'm-3')
    textTaskParam(itemTask)
    containerButtons(itemTask)
}

function textTaskParam(itemTask, divTask) {
    const textTask = document.createElement('p')
    textTask.textContent = inputAddTask.value
    itemTask.appendChild(textTask)
    console.log(divTask)
}

function containerButtons(itemTask, divTask) {
    const divButtons = document.createElement('div')
    divButtons.classList.add('buttons-edit-feito-clean')
    // buttons(divButtons)
    itemTask.appendChild(divButtons)
    // divTask.appendChild(itemTask)
}

// function buttons(divButtons) {
    //     finishButton.classList.add('finish')
    //     editButton.classList.add('editar')
    //     cleanButton.classList.add('apagar')
    //     divButtons.appendChild(finishButton)
    //     divButtons.appendChild(editButton)
    //     divButtons.appendChild(cleanButton)
    //     icones(finishButton, editButton, cleanButton)
    // }
    
    const iconCheck = document.createElement('i')
    const iconEdit = document.createElement('i')
    const iconErased = document.createElement('i')
    // function icones(finishButton, editButton, cleanButton) {
        //     iconCheck.classList.add('fa-solid', 'fa-check')
        //     iconEdit.classList.add('fa-solid', 'fa-check')
        //     iconErased.classList.add('fa-solid', 'fa-xmark')
        //     finishButton.appendChild(iconCheck)
        //     editButton.appendChild(iconEdit)
        //     cleanButton.appendChild(iconErased)
        // }
        
        
//---------------------------------------------- FECHAMENTO DA FUNÇÃO ADICIONAR TAREFA ----------------------------------------------



//######################################################### EVENTOS ################################################################



//--------------------------------------------------- EVENTO DE ADICIONAR TAREFA ----------------------------------------------------

const eventAddTask = document.querySelector('#botao-adicionar-tarefa')
eventAddTask.addEventListener('click', addTask)

//----------------------------------------- FECHAMENTO DO EVENTO DE ADICIONAR TAREFA ------------------------------------------------

// console.log(inputAddTask.value)
// function addTask(reload) {
//     reload.preventDefault()
//     const divtask = document.createElement('div')
//     divtask.classList.add('tarefa-pai')
//     listTask.appendChild(divtask)
//     console.log(divtask)

// }

// function conteudo() {

// }