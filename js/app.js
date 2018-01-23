
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
//Para generar la función random
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// console.log(getRandomInt(100, 999));
//



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
