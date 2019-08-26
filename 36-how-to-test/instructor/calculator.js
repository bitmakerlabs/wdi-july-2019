function add(x,y) {
  return x + y;
}

function sub(x,y) {
  return x - y;
}

// function fizzbuzz(n) {
//   let results = [];
//   for (var i = 1; i <= n.length; i++) {
//     if (n % 3 == 0 && n % 5 == 0) {
//       results.push('fizzbuzz')
//     } else if (n % 3 == 0) {
//       results.push('fizz')
//     } else if (n % 5 == 0) {
//       results.push('buzz')
//     } else {
//       results.push(n)
//     }
//   }
//   return results
// }
//
// fizzbuzz(5)
//
// expect(...).toEqual([1,2,'fizz',4,'buzz'])

module.exports = {
  add, sub
}
