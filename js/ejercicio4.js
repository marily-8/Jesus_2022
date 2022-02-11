let monto=90000
 let decimal1=0.05
 let decimal2=0.10
if(monto <= 30000){
 console.log("No tiene descuento");
}
else if((monto>30000) && (monto<100000)){
let descuento1=(monto * decimal1);
console.log("Su descuento es de un 5% y su valor total es:",monto - descuento1);
}
if(monto>=100000){
let descuento2=(monto * decimal2);
console.log("Su descuento es de un 10% y su valor total es:",monto - descuento2);
}