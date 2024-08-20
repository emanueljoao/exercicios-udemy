//######################################################## SELEÇÃO DE ELEMENTOS #####################################################

const formAddTask = document.querySelector('.formulario-adicionar-tarefa')
const inputAddTask = document.getElementById('itarefa')
const formEditTask = document.querySelector('.formulario-editar-tarefa')
const editTask = document.querySelector('input#ieditar')
const listTask = document.querySelector('div.lista-de-tarefas')

//###################################################### DECLARAÇÕES DE VARIAVEIS ###################################################



//############################################################## FUNÇÕES ############################################################

//-------------------------------------------------- FUNÇÃO DE ADICIONAR A TAREFA ---------------------------------------------------

function addTask() {
    console.log(inputAddTask.value);
    const divTask = document.createElement('div')
    divTask.classList.add('tarefa-pai')
    addTaskChild(divTask)
}

function addTaskChild(divTask) {
    const divTaskChild = document.createElement('div')
    divTaskChild.classList.add('tarefa-filho', 'd-flex', 'm-3')
    divTask.appendChild(divTaskChild)
    addTaskText(divTaskChild)
    // addTaskDivButtons(divTaskChild)
    console.log(divTask);
}

function addTaskText() {

}

// function buttons() {
//     const finishButton = document.createElement('button')
//     const editButton = document.createElement('button')
//     const cleanButton = document.createElement('button')
//     icons()
// }

// function icons() {

//     const iconCheck = document.createElement('i')
//     iconCheck.classList.add('fa-solid', 'fa-check')
//     finishButton.appendChild(iconCheck)

//     const iconEdit = document.createElement('i')
//     iconEdit.classList.add('fa-solid', 'fa-check')
//     editButton.appendChild(iconEdit)

//     const iconErased = document.createElement('i')
//     iconErased.classList.add('fa-solid', 'fa-xmark')
//     cleanButton.appendChild(iconErased)
//     finishFunction()
// }

function finishFunction() {

}


//---------------------------------------------- FECHAMENTO DA FUNÇÃO ADICIONAR TAREFA ----------------------------------------------



//######################################################### EVENTOS ################################################################



//--------------------------------------------------- EVENTO DE ADICIONAR TAREFA ----------------------------------------------------
const addTaskListener = document.querySelector('button#botao-adicionar-tarefa')
addTaskListener.addEventListener('click', addTask)


//----------------------------------------- FECHAMENTO DO EVENTO DE ADICIONAR TAREFA ------------------------------------------------

