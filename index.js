// function is_blank(input) {
//     if (input.length === 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log('tyu ${is_blank(" ")}')
// console.log(is_blank("rtyu"))
/**
 *  
 */



// function map(tr,col){
//     const result =  [];

    
//     for(let item of col){
//         result.push(tr(item)) ;
//     }
//     return result;
// }
// function  addOne(number){
//     return number + 1;
// }

// const result = map(addOne , [1,2,3]);
// console.log(result)


// function bb(num_1,num_2){
//     const sum = 0
//     for (let i of num_2){
//         sum.push()
//     }
// }

// const cc = num => xx(num);
// function cc(num){
//     return xx(num);
// }
// function xx(num){
//     return num + 5
// }
// console.log(cc(5))
// console.log(cc(15))

function  cre(num){
    return function(newnumber){
        return num + newnumber;
    };
}
const add = cre(4);
console.log(add(10));
console.log(add(14));
console.log(add(12));
// 
// 
function cre(num){
    return   newnumber  => num + newnumber;
        
    
}
const add_1 = cre(1);
console.log(add_1(10));


// const add_10 = cre(10);
// console.log(add_10(10));
// console.log(add_10(14));
// console.log(add_10(12));


// function addsNum(n) {
//     return function(x) {
//       return x + n;
//     };
//   }
  
//   var adds1 = addsNum(1);
//   console.log(adds1(3));  // Output: 4
//   console.log(adds1(5.7));  // Output: 6.7
  
//   var adds10 = addsNum(10);
//   console.log(adds10(44));  // Output: 54
//   console.log(adds10(20));  // Output: 30
  