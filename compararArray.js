
let r1 = [5,5,5];
let r2 = [5,5,5];
            
            
const comparar = (r1,r2)=>{
var comparacao =  r1.lenght === r2.lenght &&
    r1.every((item,index)=> item === r2[index])
   
if(comparacao==true)
{
    console.log("Array Iguais!");
}
else{
    console.log("Os Arrays não são iguais!")
}

    }
  
console.log(comparar(r1,r2));