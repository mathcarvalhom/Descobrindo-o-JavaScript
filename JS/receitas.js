let receitas = []

getBuscarDadosJSON()

async function getBuscarDadosJSON(){
    const res = await fetch('./dados.json')
    receitas = await res.json()
    exibirDadosNaTela(receitas)
}

const elementoParaInserirReceitas = document.getElementById('pnlCatalogo')

function exibirDadosNaTela(receitas){
    elementoParaInserirReceitas.innerHTML = ''

    //Fiz um forEach para pegar cada receita do arquivo json e extrair os dados diretamente pelo innerHTML, onde na parte da lista tem um map que vai percorrer todos os ingredientes disponíveis e retornar uma li.
    receitas.forEach(receita => {
        elementoParaInserirReceitas.innerHTML += `
    <div class="receita card bg-white col-md-3 mb-3">
        <img class="card-img-top" src="${receita.imagem}" alt="${receita.alt}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 5px;">
        <div class="card-body">
            <h1 class="card-title">${receita.nome}</h1>
            <hr>
            <h2 class="card-text">Ingredientes</h2>
            <ul>
            ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <hr>
            <h3 class="card-text">Modo de Preparo</h3>
            <p>${receita.preparo}</p>
        </div>
    </div>
        `
    })
}