const arrayOne = [6, 13, 250, 3 ]


function largest(a){
    let num = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
        console.log(a[i],num)
        num = a[i];
      console.log(`num = ${num}`)}
    }
    return num;
  }
  console.log(largest(arrayOne))