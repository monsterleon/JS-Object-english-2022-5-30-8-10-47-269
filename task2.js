var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
let arr = Object.values(fruit)
let sum = 0
arr.forEach((item) => {
  sum += item
})
console.log(sum)