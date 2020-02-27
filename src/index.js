module.exports = function reverse (n) {
  if (n < 0) {
    n = [n].map((i)=>{return (i != 0)? i*-1: i})
  } 
    let str = n.toString().split('').reverse().join('')
  
  return Number(str)
  
}
