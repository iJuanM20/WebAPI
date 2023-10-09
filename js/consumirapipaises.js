function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            // crearListaPaises(paises);
            adicionarDatosTablaPaises(paises);

        });

    function adicionarDatosTablaPaises(paises) {


        var tabla = document.getElementById("tablaPaises");

        for (const pais of paises) {

           var fila = tabla.insertRow(-1);
           var columnaNombre = fila.insertCell(0);
           var columnaCapital = fila.insertCell(1);
           var columnaRegion = fila.insertCell(2);

           columnaNombre.innerHTML = pais.name.official;
           columnaCapital.innerHTML = pais.capital[0];
           columnaRegion.innerHTML = pais.region;

        }


    }


    function crearListaPaises(paises) {

        var ul = crearNodo("ul");

        for (const pais of paises) {

            var li = crearNodoTexto("li", pais.name.common);
            adicionarNodoContenedor(ul, li);

        }

        adicionarNodoBody(ul);

    }
}
