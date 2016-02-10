$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';


  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);



  function updateDisplay(){
   var num=$(this).text();
   if($display.text()==="0"){
    $display.text(num);
   }else{
    $display.text($display.text()+num);
   }
  }
  function divide(){


  }

  function multiply(){

  }

  function subtract(){

  }

  function equal(){

  }

  function plus(){

  }

  function clear(){
   $('#display').text("");
  }

  function memAdd(){

  }

  function memSub(){

  }

  function memClear(){

  }

  function memDisplay(){

  }



});
