let array = ['sffsf',2, 'trjjjjfl',true];
array.forEach(function(item, index, arr){
    console.log(index);
    console.log(item);
    console.log(arr);
});

let array2 = ['fff','ggg', 1];
array2.forEach( (item, index) => {
    console.log(item);
    console.log(index)
});

console.log(Object.keys(array2));