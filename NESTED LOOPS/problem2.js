
for (i=1;i<=50;i++){
  let c=0;
  for (let j=1;j<=i;j++){
    if (i%j==0){
      c++;
    }
  }
  if (c==2){
    console.log(i,"is prime");
  }else{
    console.log(i, "is not prime");
  }
}