function findNum()
{
  for (let a=0; a<1000; a++) {
    for (let b=0; b<1000; b++) {
      let c = Math.sqrt(a*a + b*b);
      if (a+b+c == 1000 && a<b && b<c) {
        return a*b*c;
      }
    }
  }
}

console.log(findNum());
