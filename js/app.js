
//Pantalla 1 a pantalla 2
var $pantalla1 = $('#pantalla1');
var $pantalla2 = $('#pantalla2');
$pantalla1.fadeOut(5000);
$pantalla2.fadeIn(5000);

//Después de que el usuario oprime el botón signup, pasa de pantalla 2 a pantalla 3
var $signUp=$('#signup');
$signUp.click(function() {
    $('#pantalla2').fadeOut(5000);
    $('#pantalla3').fadeIn(5000);
});
//Para habilitar y desabilitar el botón next depende de los numeros ingresados en el id phone
  $phone=$('#phone');
  $phone.keyup (function () {
    $nextBtn=$('#next-btn');
    var $phoneValue= (($phone).val().length);//Contiene el número de valores insertados
      if($phoneValue == 10) {
        $nextBtn.removeAttr('disabled');
        $nextBtn.addClass('able');
      }
      else {
        $nextBtn.attr('disabled', true);
        $nextBtn.removeClass('able');
      }
    });

//Cuando el botón "next" sea oprimido se genreará un código aleatorio
$nextBtn=$('#next-btn');
$nextBtn.click(function(){
  //Para generar la función random
function getRandomInt(min, max) {
  var random=  Math.floor(Math.random() * (max - min)) + min;
  return random;
}
//console.log(getRandomInt(100, 999));

/*Para regresar el número generado por medio de DOM*/
//Acceder al elemento padre
var $contenedorRandom=$('#container-random');
$contenedorRandom.empty();
//Crear elemento con sus atributos
var $rnd=$('<div></div>').text(getRandomInt(100, 999));
var $inputCode=$('<input></input>').attr(
                                            {'placeholder':'Ingresa el código',
                                             'maxlength': '3',
                                             'pattern':'[0-9]{2}'});

var $btnCode=$('<button></button>').text('Validar').attr({'id':'btn-code',
                                                             'class':'waves-effect grey darken-3 btn'});
//Hacer el boton para enviar el código
//Agregar a DOM
$contenedorRandom.append($rnd);
$contenedorRandom.append($inputCode);
$contenedorRandom.append($btnCode);

//Validación del código
//Después de que el usuario de click en el botón de validar se debe realizar la comparación




if ($rnd==$inputCode) {
  console.log('si');
}
else {
  console.log('no');
  }
});






// var $nextBtn = $('next-btn');//Trae el botón de next
 //var $pais = document.getElementById('pais');
// var $pais = $('#pais');
// $('select').change(function() {console.log(options[$pais.selectedIndex]);});
//
//
// $nextBtn.click (function() {
//
// $pais.change(function()
// {var pais = $('#pais').val();
// console.log(pais);//Opción seleccionada
// });
// $phone=$('#phone');
//     var $phoneValue= (($phone).val().length);//Contiene el número de valores insertados
// console.log($phoneValue);
//


// if (pais !== '' && $phoneValue.length === 10) {
//         $nextBtn.removeAttr('disabled');
//         $nextBtn.addClass('able');
//     } else {
//         $nextBtn.attr('disabled', true);
//         $nextBtn.removeClass('able');}
//
// });




//if($paisvalue)
// $nextBtn.click(
//   function(){
//      var act= $pais.value();
//     console.log(act);
//     // var $selectedOption = this.options[$pais.selectedIndex].value;// Devuelve el valor de la selección
//     $phone=$('#phone');
//     var $phoneValue= (($phone).val().length);//Contiene el número de valores insertados
//     // console.log($selectedOption);
//     console.log($phoneValue);
//   });
