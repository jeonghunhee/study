const slime = {
    name : 'slime',
}

const cuteslime = {
    name : 'slime',
    attribute : 'cute',
}

const purpleCuteSlime = {
    ...cuteslime,
    color : 'purple',
}

console.log(slime);
console.log(cuteslime);
console.log(purpleCuteSlime);


var{color , others} = purpleCuteSlime;
console.log(purpleCuteSlime);