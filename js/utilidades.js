function crearNodo(tipoNodo) {

  var nodo = document.createElement(tipoNodo);
  return nodo;

}

function crearNodoTexto(tipoNodo, texto) {

  var nodo = crearNodo(tipoNodo);
  var textoNodo = document.createTextNode(texto);
  nodo.appendChild(textoNodo);
  return nodo;

}

function crearNodoImagen(url, alt) {

  var nodo = crearNodo("img");
  nodo.src = url;
  nodo.alt = alt;
  return nodo

}

function adicionarNodoContenedor(contenedor,nodo) {

  document.body.appendChild(nodo);
}

function crearNodoA(texto, href){

  var nodo = crearNodoTexto("a",texto)
}

function adicionarNodoBody(nodo) {

  document.body.appendChild(nodo);

}

