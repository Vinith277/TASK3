var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 var newObject = {};
for(i=0;i<arr.lenght;i++){
    let key = arr[i][0];
    let value = arr[i][1];
    newObject[key]=value;
}
 return newObject;
}
console.log(fromListToObject(arr));