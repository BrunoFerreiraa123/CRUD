const modal = document.getElementById('modal-container');
const tbody = document.querySelector('tbody');
const modalNome = document.getElementById('modal-nome');
const modalCargo = document.getElementById('modal-cargo');
const modalSalario = document.getElementById('modal-salario');
const btnSalvar = document.getElementById("btnSalvar");

let itens;
let id;

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        modalNome.value = itens[index].nome
        modalCargo.value = itens[index].funcao
        modalSalario.value = itens[index].salario
        id = index
    } else {
        modalNome.value = ''
        modalCargo.value = ''
        modalSalario.value = ''
    }

}

function editItem(index) {
    openModal(true, index)
}

function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}
