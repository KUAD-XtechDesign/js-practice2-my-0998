$(function(){
 
    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;
    　　

    function sayHello(){
      $("#content").txet("こんにちは！");
    }

    function saySomething(txt){
      $("#content").txet(txt);
    }

    function samTwo(txt){
      $("#content").txet(txt)
    }


    $("#button01").on("click",function(){
      seyHello();
    })
    
    $("#button02").on("click",function(){
      saySomething(txt1);
    })
    
    $("#button03").on("click",function(){
      somTwo(txt1,txt2)
    })
    
    $("#button04").on("click",function(){
        somTwo(num1,num2)
    })
    
    
    $("#button05").on("click",function(){
        somTwo(txt1,txt2)
        somTwo(num1,num2)

    })
    
    
   })
   
   