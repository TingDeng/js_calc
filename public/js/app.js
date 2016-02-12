$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';
  var resetInput= true;

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
    if($display.text()==="0"||resetInput===true){
        $display.text(num);
      }
    else{
    $display.text($display.text()+num);
  }
  resetInput=false;
}
  function divide(){
    
     var display=$display.text();
     var num=parseFloat(display);
    if(calculator.current===0){
    calculator.current=num;
  }
    else{
      calculator.current=calculator.current/num;
    };
    $display.text(calculator.current);
    lastOperation="/";
    resetInput=true;
}


  function multiply(){

    var display=$display.text();
    var num=parseFloat(display);
    if(calculator.current===0){
    calculator.current=num;
  }
    else{
      calculator.current=calculator.current*num;
    };
    $display.text(calculator.current);
      lastOperation="x";
      resetInput=true;
    }

  function plus(){

    var displayText = $display.text();
    var num = parseFloat(displayText);
    if(calculator.current===0){
    calculator.current=num;
  }
    else{
      calculator.current=calculator.current+num;
    };
    $display.text(calculator.current);
    lastOperation = '+';

    resetInput=true;

}
  function subtract(){

    var displayText = $display.text();
    var num = parseFloat(displayText);

    if(calculator.current===0){
    calculator.current=num;
  }
    else{
      calculator.current=calculator.current-num;
    };
    $display.text(calculator.current);

    lastOperation = '-';

    resetInput=true;
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






  function clear(){
    calculator.reset();
   $display.text(0);
   lastOperation='clear';
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
