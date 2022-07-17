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

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.funcao}</td>
      <td>R$ ${item.salario}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' style="cursor:pointer"></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash' style="cursor:pointer"></i></button>
      </td>
    `
    tbody.appendChild(tr)
}
