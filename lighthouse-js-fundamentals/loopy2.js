function loopyLighthouse(arr1, arr2, arr3){
  
  for(let i = arr1[0]; i <= arr1[1]; i++){
    if(i % arr2[0] === 0 && i % arr2[1] === 0){
      let y = arr3[0] + arr3[1];
      console.log(y);
    }else if(i % arr2[0] === 0){
      console.log(arr3[0]);
    }else if( i % arr2[1] === 0){
      console.log(arr3[1]);
    }else {
      console.log(i);
    }
  }

}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);