// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("the type of var a: "+typeof(a));
console.log("the type of var b: "+typeof(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function multipliesTwo(arr){
    for (i = 0; i<arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}
console.log(multipliesTwo(a));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function caseOne(str){
    var result = str.join(' ');
    return result;
}

function caseTwo(str){
    var result = str.join('+');
    return result;
}

function caseThree(str){
    var result = str.join(',');
    return result;
}
console.log(caseOne(colors));
console.log(caseTwo(colors));
console.log(caseThree(colors));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function (a, b) {
    return b - a;
  });
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function mostFreq(a){
    var freq=1;
    var m = 0;
    var item;
    for (var i=0; i<a.length; i++)
    {
            for (var j=i; j<a.length; j++)
            {
                    if (a[i] == a[j])
                     m++;
                    if (freq<m)
                    {
                        freq=m; 
                        item = a[i];
                    }
            }
            m=0;
    }
    return item
}
console.log(mostFreq(a));
