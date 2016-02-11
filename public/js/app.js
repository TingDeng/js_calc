$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';


  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#minus').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);



  function updateDisplay(){

    var num=$(this).text();
    if($display.text()==="0"||$(".operator").on){
        $display.text(num);
    } else{
        $display.text($display.text()+num);
    }

  }
  function divide(){
    var display=$display.text();
    var num=parseFloat(display);
    calculator.add(num);
    $display.text(num);
    lastOperation="/";
  }

  function multiply(){
      var display=$display.text();
      var num=parseFloat(display);
      calculator.add(num);
      $display.text(num);
      lastOperation="x";
    }
  //   lastOperation=$(this).text();
  //   if(calculator.current===0){
  //       calculator.current=parseFloat($display.text());
  // }
  // else{
  // calculator.current=calculator.multiply(parseFloat($display.text()));
  //    $display.text(calculator.current);



  function subtract(){
    var displayText = $display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    $display.text(num);
    lastOperation = '-';
  }

  function equal(){
   var displayText = $display.text();
   var num = parseFloat(displayText);
   if(lastOperation === '-'){
     calculator.subtract(num);
   }
   else if(lastOperation==='x'){
      calculator.multiply(num);
     }
   else if(lastOperation==='+'){
      calculator.add(num);
     }
    else if(lastOperation==='/'){
      calculator.divide(num);
     }

   var result = calculator.result();
   $display.text(result);
   calculator.reset();
  }


  function plus(){
    var displayText = $display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    $display.text(num);
    lastOperation = '+'

    }
    // var sum+=$(display).text();
  //  value=$(display).text();
  //  value=eval(value);
  //  $(display).text()=value;


  function clear(){
   $('#display').text("0");
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
