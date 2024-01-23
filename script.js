var n1 = parseInt(prompt("Ingresa el primer número"));
var n2 = parseInt(prompt("Ingresa el segundo número"));
var n3 = parseInt(prompt("Ingresa el tercer número"));



function numerosDiferentes() {
    if(n1 === n2 && n1 === n3){
        console.log("Los números " + n1 + ", " + n2 + " y " + + n3 + " son iguales");
        alert("Los números " + n1 + ", " + n2 + " y " + + n3 + " son iguales");

    }else{
        console.log("Los números " + n1 + ", " + n2 + " y " + n3 + " son diferentes");
        alert("Los números " + n1 + ", " + n2 + " y " + n3 + " son diferentes");
    }

}


function numerosMayores() {
    if (n1 > n2 && n1 > n3){
        console.log("El número " + n1 + " es mayor");
        alert("El número " + n1 + " es mayor")
    } else if (n2 > n1 && n2 > n3){
        console.log("El número " + n2 + " es mayor");
        alert("El número " + n2 + " es mayor");
    } else {
        console.log("El número " + n3 + " es mayor");
        alert("El número " + n3 + " es mayor");
    }

}



function numerosMenores() {
    if (n1 < n2 && n1 < n3){
        console.log("El número " + n1 + " es menor");
        alert("El número " + n1 + " es menor");
    } else if (n2 < n1 && n2 < n3){
        console.log("El número " + n2 + " es menor");
        alert("El número " + n2 + " es menor");
    } else {
        console.log("El número " + n3 + " es menor");
        alert("El número " + n3 + " es menor");
    }
}


function numerosMedia() {
    var numeros = [n1,n2,n3];
    var suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];        
    }

    var media = suma / numeros.length;
    
    console.log("La media de los números " + numeros + " es " + media);
    alert("La media de los números " + numeros + " es " + media);
}