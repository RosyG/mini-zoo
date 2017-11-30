/*var referenciaSelectDeOption =document.getElementById('el-select');
referenciaSelectDeOption.add
*/
function pasarAlgo(event) {
  var selectedIndex= event.target.selectedIndex;/*Me da la posicion en indice por ser un arreglo*/
  /*console.log(event.target[selectedIndex].dataset.filtro);/*Me arroja al elemento de la posicion de la variable*/
  var filtroAaplicar = event.target[selectedIndex].dataset.filtro;
  /*Para hacer lo anterior, puedo usar clases, class="gray", etc. Pero lo mas recomentable es con dataset*/

  if (filtroAaplicar=='gray') {
    cambiarAgray();/*Se manda a llamar a la función*/
  }else  if(filtroAaplicar=='sepia'){
    cambiarAsepia ();
  }else if (filtroAaplicar=='quitarFiltro') {
    quitarFiltro ();
  }else if (filtroAaplicar=='invert') {
    cambiarInvert ();
  }

}

function quitarFiltro() {
  var imagenesAcambiar= document.getElementsByTagName('img');
  for(i=0; i<imagenesAcambiar.length;i++){
  imagenesAcambiar[i].className="quitarFiltro";
  }
}

function cambiarAgray() {
  var imagenesAcambiar= document.getElementsByTagName('img');
  for(i=0; i<imagenesAcambiar.length;i++){
  imagenesAcambiar[i].className="gray";
  }
  /*imagenesAcambiar[5].className ="gray"; /*Cambiando a la ultima imagen a gray, por ello le asignamos la clase en la posicion 5*/
}

function cambiarAsepia () {
  var imagenesAcambiar= document.getElementsByTagName('img');
  for(i=0; i<imagenesAcambiar.length;i++){
  imagenesAcambiar[i].className="sepia";
  }
}

function cambiarInvert () {
  var imagenesAcambiar= document.getElementsByTagName('img');
  for(i=0; i<imagenesAcambiar.length;i++){
  imagenesAcambiar[i].className="invert";
  }
}
