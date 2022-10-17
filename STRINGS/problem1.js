let x= "Masai School";
let count=0;
for (let i=0;i<=x.length-1;i++){
  if (x[i]==" "){
    count++;
  }
}
if (x.length!=0){
  console.log("Number of Words are:",count+1);
}else{
  console.log("Number of Words are:",0);
}