window.onload = function(){
    document.querySelector("#alerta1").addEventListener("click", function(){
        function saas(){}
        navigator.notification.alert("Mandioca?", saas, "Mandioca", "Mande, oca!");
        
    });

    document.querySelector("#alerta2").addEventListener("click", function(){
        function saas(buttonIndex){
            if(buttonIndex == 1)
            {
                navigator.app.exitApp();
            }else{
                return false; 
            }
        }
        navigator.notification.confirm("Fechar?", saas, "Fechar hihihi", ['sim hihihi', 'não >:{'] );
        
    });

    document.querySelector("#beep").addEventListener("click", function(){
        navigator.notification.beep(5);
    });

    document.querySelector("#vibrar").addEventListener("click", function(){
        navigator.vibrate([3000]);
    });

}