var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr.length; i++){
    arr2.push(arr[i] * 2);
}

console.log(arr2);

function mapForEach(arr, fn){
    
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    
    return newArr;
}

var arr3 = mapForEach(arr1, function(item){
    return item * 2;
})