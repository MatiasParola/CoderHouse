function rellenaLista(e){
    e.preventDefault();
    let nombre= document.getElementById("nombre")
    
    let lista = document.getElementById('lista')
        items = document.createElement('li')
        nodoTexto = document.createTextNode(nombre.value)

    items.appendChild(nodoTexto)
    lista.appendChild(items)
    

}

window.onload = function() {
    document.addEventListener('keyup',function(e){
        if (e.keyCode === 13) {
        alert('Apretaste Enter ');
        e.preventDefault();
      }
    });
}



