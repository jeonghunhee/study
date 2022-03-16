var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

//var combined = [array1[0], array1[1], array2[0] ,array2[1]];
var combined = [...array1, ...array2];
//var combined = [].concat(array1 ,array2);
console.log(combined);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
console.log(three);


/*function func(){
    var args = Array.prototype.slice.call(arguments);
    var first = args[0];
    console.log(first);
    var others =args.slice(1);
    console.log(others);
}*/

function func(first, ...others){
    var firstEs6 = first;
    var othersInEs6 = others;

    console.log(firstEs6, othersInEs6);
}

func(1, 2, 3,4,5,6,7);