function mostrarAlerta(){
    alert("Hola bienvenido al sitio web");
    console.info("Alerta mostrada");
}
function suma(){
    let valor1=5;
    let valor2=10;
    let resultado=valor1+valor2;    
    console.info("La suma de "+valor1+" y "+valor2+" es: "+resultado);
}

function sumaParam(valor1, valor2){
    console.info("Valores recibidos--> Valor 1: "+valor1+" y Valor 2:"+valor2);
    let resultado=valor1+valor2;    
    console.info("La suma de "+valor1+" y "+valor2+" es: "+resultado);
}

function sumarInput(){
    let val1=document.getElementById("valor1").value;
    let val2=document.getElementById("valor2").value;
    let res=Number(val1)+parseFloat(val2);
    console.info("La suma de "+val1+" y "+val2+" es: "+res);
    if(res>10){
        document.getElementById("mensaje").value="El resultado es mayor a 10";
    }else{
        document.getElementById("mensaje").value="El resultado es menor a 10";
    }
}
