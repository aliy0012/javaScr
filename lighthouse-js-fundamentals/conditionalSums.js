const conditionalSum = function(values, condition) {
  let odd = 0;
  let even = 0;
  for(let i = 0; i < values.length; i++){
    if(condition === 'even'){
      if(values[i] % 2 === 0){
        even += values[i];  }
    }else if(condition === 'odd'){
      if(values[i] % 2 != 0){
        odd += values[i]; 
    }
  }
}
  if(condition === 'even'){
    return even;
  }else {
    return odd;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));