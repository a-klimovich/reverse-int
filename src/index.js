module.exports = function reverse (n) {
  if (n < 0) {
    n = [n].map((i)=>{return (i != 0)? i*-1: i})
  } 
 
  return Number(n.toString().split('').reverse().join(''))
  
}
