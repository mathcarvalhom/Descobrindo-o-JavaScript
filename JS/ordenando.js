const lista = document.getElementById('lista')
let vetor = lista.children
let pos1
let pos2

const swap = (vetor, pos1, pos2) => {
    const temp = vetor[pos1].innerHTML;
    vetor[pos1].innerHTML = vetor[pos2].innerHTML;
    vetor[pos2].innerHTML = temp;
}
  
const shuffle = (vetor, qtdTrocas) => {
    for(let i = 0; i < qtdTrocas; i++) {
      const pos1 = geraNum(vetor);
      const pos2 = geraNum(vetor);
      swap(vetor, pos1, pos2);
    }
}
  
const bubble_sort = (vetor) => {
    const n = vetor.length;
    for(let i = 0; i < n - 1; i++) {
      for(let j = 0; j < n - i - 1; j++) {
        if(parseInt(vetor[j].textContent) > parseInt(vetor[j + 1].textContent)) {
          swap(vetor, j, j + 1);
        }
      }
    }
}

const selection_sort = (vetor) => {
    const n = vetor.length;
    for(let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for(let j = i + 1; j < n; j++) {
        if(parseInt(vetor[j].textContent) < parseInt(vetor[minIndex].textContent)) {
          minIndex = j;
        }
      }
      swap(vetor, i, minIndex);
    }
}
  
const quick_sort = (vetor, start, end) => {
    if(start < end) {
      const pivotIndex = particionamento(vetor, start, end, vetor[end]);
      quick_sort(vetor, start, pivotIndex - 1);
      quick_sort(vetor, pivotIndex + 1, end);
    }
}

const particionamento = (vetor, start, end, pivot) => {
    let i = start;
    for(let j = start; j < end; j++) {
        if(parseInt(vetor[j].textContent) < parseInt(pivot.textContent)){
        swap(vetor, i, j);
        i++;
      }
    }
    swap(vetor, i, end);
    return i;
}

function add(){
    const pegaValor = document.getElementById('valor')
    lista.innerHTML += `
    <li class="listaItem">${pegaValor.value}</li>
    `
    document.getElementById('valor').value = ''
}

function ordenar(){
    const selecao = document.querySelector('#selection')
    if(selecao.value == 'bubble_sort') bubble_sort(lista.children)
    if(selecao.value == 'selection_sort') selection_sort(lista.children)
    if(selecao.value == 'quick_sort') quick_sort(vetor, 0, vetor.length - 1);

}

function misturar(){
    shuffle(lista.children, vetor.length)
}

function geraNum(vetor){
    return Math.floor(Math.random() * vetor.length)
}