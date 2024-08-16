// SELEÇÃO DE ELEMENTOS 
const form_adiconar_tarefa = document.querySelector('.formulario-adicionar-tarefa')
const adicionar_tarefa = document.querySelector('input#itarefa')
const form_editar_tarefa = document.querySelector('.formulario-editar-tarefa')
const editar_tarefa = document.querySelector('input#ieditar')
const form_ = document.querySelector('.itarefa')
const todofm = document.querySelector('input#itarefa')

// FUNÇÕES

// EVENTOS 
const evento_adicionar_tarefa = document.querySelector('#botao-adicionar-tarefa')
evento_adicionar_tarefa.addEventListener('click', tarefa_adicionada)

function tarefa_adicionada(reload) {
    reload.preventDefault()
    let adicionar_tarefa_value = adicionar_tarefa.value
    console.log(adicionar_tarefa_value)
}