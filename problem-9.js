function findNum(high)
{
  for (let a=0; a<high; a++) {
    for (let b=0; b<high; b++) {
      let c = Math.sqrt(a*a + b*b);
      if (a+b+c == 1000 && a<b && b<c) {
        return a*b*c;
      }
    }
  }
}

console.log(findNum(1000));
