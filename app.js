// var newVal=prompt("enter length");
// var newArra=[];
// var a;
// var x;
// for(i=0;i<newVal;i++){
// a=prompt("enter array of elements");
//     newArra.push(a);
// }
// for(var i=0; i<newArra.length;i++){
//     x=i;
//     for(j=i+1;j<newArra.length;j++){
//         if(newArra[j]<newArra[x]){
//             x=j;
//         }
//         console.log(x);
//     }
// }




function Sort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i < max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i < max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5,9, 4, 1,1,4,6]; 
console.log(arra.length);
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(Sort(arra, 0, arra.length));
