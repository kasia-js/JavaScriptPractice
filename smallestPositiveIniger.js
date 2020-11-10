// let A = [1,3,6,4,1,2];
// let A = [1,2,3];
let A = [-1,-3];

for (let N = 1; N <= 100000; N++) {
  if(!A.includes(N)) {
    console.log(N);
    return N;
  }
}