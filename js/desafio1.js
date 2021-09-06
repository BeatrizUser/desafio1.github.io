//      Desafio 1

// FUNCAO DE CONSULTA DE TODOS OS ID //
function extraiId(listadeprodutos){
	
    var listadeid = []
  
    for (let produto of listadeprodutos) {
      listadeid.push(produto.id)
    }
    return listadeid
  }
  // VARIAVEIS QUE ARMAZENAM AS INFORMAÇÕES DA FUNCAO//
  var id = extraiId(dicionario.produtos)
  // IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
  console.log(id)

//      Desafio 2

//FUNÇÃO QUE BUSCA TODAS AS INFORMAÇÕES DO ITEM BUSCANDO PELO NOME//
function pegaprodutopelonome(listadeprodutos, nomedoproduto){
	for (let produto of listadeprodutos){
  	if(nomedoproduto == produto.title){
    	return produto
    }
		
  }
	return "NENHUM VALOR FOI ENCONTRADO."
}

// VARIAVEL QUE RECEBE O RESULTADO DA FUNÇÃO //
var resultadonome = pegaprodutopelonome(dicionario.produtos,"nomecompleto")
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(resultadonome)

//      Desafio 3

// FUNCAO DE CONSULTA DE TODOS AS CATEGORIAS //
function extraicategoria(listadeprodutos){
	
  var listadecategorias = []

  for (let produto of listadeprodutos) {
    listadecategorias.push(produto.category)
  }
  return listadecategorias
}
// VARIAVEIS QUE ARMAZENAM AS INFORMAÇÕES DA FUNCAO//
var categorias = extraicategoria(dicionario.produtos)
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(categorias)

//      Desafio 4

//FUNÇÃO QUE BUSCA TODAS AS INFORMAÇÕES DO ITEM BUSCANDO PELO RATING "MAIOR QUE"//
function filtrarprodutospelorate(listadeprodutos, rate){
  for (let produto of listadeprodutos){
  	let rating = produto.rating
    	if(rate <= rating.rate){
      	return produto
    }
    
  }
  return "NENHUM PRODUTO ENCONTRADO COM ESSA AVALIAÇÃO."
}

// VARIAVEL QUE RECEBE O RESULTADO DA FUNÇÃO //
var produtosporrate = filtrarprodutospelorate(dicionario.produtos,2.2)
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(produtosporrate)

//      Desafio 5

//FUNÇÃO QUE BUSCA TODAS AS INFORMAÇÕES DO ITEM BUSCANDO PELO PREÇO "MAIOR QUE"//
function filtrarprodutospeloprecomaior(listadeprodutos, preco){
  for (let produto of listadeprodutos){
  	let price = produto.price
    	if(preco <= produto.price){
      	return produto
    }
    
  }
  return "NENHUM PRODUTO ENCONTRADO COM ESSA AVALIAÇÃO."
}

// VARIAVEL QUE RECEBE O RESULTADO DA FUNÇÃO //
var produtosporpreco = filtrarprodutospeloprecomaior(dicionario.produtos,12.99)
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(produtosporpreco)

//      Desafio 6

//FUNÇÃO QUE BUSCA TODAS AS INFORMAÇÕES DO ITEM BUSCANDO PELO PREÇO "MENOR QUE"//
function filtrarprodutospeloprecomenor(listadeprodutos, preco){
  for (let produto of listadeprodutos){
  	let price = produto.price
    	if(preco >= produto.price){
      	return produto
    }
    
  }
  return "NENHUM PRODUTO ENCONTRADO COM ESSA AVALIAÇÃO."
}

// VARIAVEL QUE RECEBE O RESULTADO DA FUNÇÃO //
var produtosporpreco = filtrarprodutospeloprecomenor(dicionario.produtos,12.99)
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(produtosporpreco)

//      Desafio 7

//FUNÇÃO QUE BUSCA O PRODUTO PELO TITULO USANDO PALAVRAS-CHAVE//
function filtrarporpalavra(listadeprodutos, palavra){
  for (let produto of listadeprodutos){
  	let title = produto.title
    let description = produto.description
    let category = produto.category
    
    let searchtitle = title.search(palavra)
    let searchdescription = description.search(palavra)
    let searchcategory = category.search(palavra)
    	
     	if (searchtitle >= 0 || searchdescription >= 0 || searchcategory >= 0)
      	return produto
  }
  return "Nenhum produto encontrado."
}

// VARIAVEL QUE RECEBE O RESULTADO DA FUNÇÃO //
var produtosporpalavra = filtrarporpalavra(dicionario.produtos,"Women")
// IMPRESSÃO NO CONSOLE DAS INFORMAÇÕES PROCESSADAS //
console.log(produtosporpalavra)