$(function(){
 
    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;
    　　

    function sayhello(){
        $("#content").txet("こんにちは！");
    }

    function saysomething(txt){
        $("#content").txet(txt);
    }

    function samtwo(txt){
        $("#content").txet(txt)
    }


    $("#button01").on("click",function(){
      seyhello();
    })
    
    $("#button02").on("click",function(){
      saysomething(txt1);
    })
    
    $("#button03").on("click",function(){
      somtwo(txt1,txt2)
    })
    
    $("#button04").on("click",function(){
        somtwo(num1,num2)
    })
    
    
    $("#button05").on("click",function(){
        somtwo(txt1,txt2);
        somtwo(num1,num2);

    })
    
    
   })
   
   