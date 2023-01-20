let totalFinal1 = 0
let totalFinal2 = 0
let totalFinal3 = 0

// --------------- Elemento carrinho 1 ---------------------
// SHOPPING CART MINUS
var btnMinus1 = document.querySelector("#qty-minus1")

btnMinus1.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyMinus1()
})

function qtyMinus1(){
  var preco = parseFloat(document.getElementById('precoArtigo1').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total1'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto1').innerHTML)
  
  if (quantidade > 1) {
  var novaQuantidade = quantidade - 1;
  document.getElementById('quantidadeProduto1').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total1').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal1 = totalPorProduto
  }
  if (quantidade == 1) {
    var novaQuantidade = 0;
  document.getElementById('quantidadeProduto1').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total1').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal1 = totalPorProduto
  }


  totalGeral()
  }


// SHOPPING CART PLUS
var btnPlus1 = document.querySelector("#qty-plus1")

btnPlus1.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyPlus1()
})

function qtyPlus1(){
  var preco = parseFloat(document.getElementById('precoArtigo1').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total1'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto1').innerHTML)

  var novaQuantidade = quantidade + 1;
  document.getElementById('quantidadeProduto1').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total1').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

  totalFinal1 = totalPorProduto
  totalGeral()
}

// --------------- Elemento carrinho 2 ---------------------
// SHOPPING CART MINUS
var btnMinus2 = document.querySelector("#qty-minus2")

btnMinus2.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyMinus2()
})

function qtyMinus2(){
  var preco = parseFloat(document.getElementById('precoArtigo2').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total2'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto2').innerHTML)
  
  if (quantidade > 1) {
  var novaQuantidade = quantidade - 1;
  document.getElementById('quantidadeProduto2').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total2').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal2 = totalPorProduto
  }
  if (quantidade == 1) {
    var novaQuantidade = 0;
  document.getElementById('quantidadeProduto2').innerHTML = novaQuantidade.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total2').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal2 = totalPorProduto
  }
  
  totalGeral()
  }


// SHOPPING CART PLUS
var btnPlus2 = document.querySelector("#qty-plus2")

btnPlus2.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyPlus2()
})

function qtyPlus2(){
  var preco = parseFloat(document.getElementById('precoArtigo2').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total2'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto2').innerHTML)

  var novaQuantidade = quantidade + 1;
  document.getElementById('quantidadeProduto2').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total2').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

  totalFinal2 = totalPorProduto
  totalGeral()
}



// --------------- Elemento carrinho 3 ---------------------
// SHOPPING CART MINUS
var btnMinus3 = document.querySelector("#qty-minus3")

btnMinus3.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyMinus3()
})

function qtyMinus3(){
  var preco = parseFloat(document.getElementById('precoArtigo3').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total3'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto3').innerHTML)
  
  if (quantidade > 1) {
  var novaQuantidade = quantidade - 1;
  document.getElementById('quantidadeProduto3').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total3').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal3 = totalPorProduto
  }
  if (quantidade == 1) {
    var novaQuantidade = 0;
  document.getElementById('quantidadeProduto3').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total3').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal3 = totalPorProduto
  }
  totalGeral()
  }


// SHOPPING CART PLUS
var btnPlus3 = document.querySelector("#qty-plus3")

btnPlus3.addEventListener("click", (event)=> {
  event.preventDefault()
  qtyPlus3()
})

function qtyPlus3(){
  var preco = parseFloat(document.getElementById('precoArtigo3').innerHTML)
  var totalPorProduto = parseFloat(document.getElementById('total3'))
  var quantidade = parseFloat(document.getElementById('quantidadeProduto3').innerHTML)

  var novaQuantidade = quantidade + 1;
  document.getElementById('quantidadeProduto3').innerHTML = novaQuantidade;
  totalPorProduto = preco * novaQuantidade;
  document.getElementById('total3').innerHTML = "€" + totalPorProduto.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  totalFinal3 = totalPorProduto
  totalGeral()
}



// ----------------- TOTAL GERAL -------------------------

function totalGeral(){
  var totalP1 = parseFloat(totalFinal1)
  var totalP2 = parseFloat(totalFinal2)
  var totalP3 = parseFloat(totalFinal3)

  var totalGeral = totalP1 + totalP2 + totalP3 + 6.99;
  var totalGeral2digits = totalGeral.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
  
  document.getElementById('totalGeral').innerHTML =  "Total = €" + totalGeral2digits;
}


// ----------------- ALERT PEDIDO CONCLUIDO -------------------------

function funcaoAlerta() {
  alert("Seu pedido foi finalizado com sucesso! \n Obrigado por comprar conosco!")
  location.href = './checkout.html'
}

