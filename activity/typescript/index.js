// Ejercicio 1
var arr = function (person) {
    return [person.name, person.age, 'profession'];
};
var lucas = {
    name: 'Lucas ',
    age: 28,
    profession: 'Full Stack'
};
console.log(arr(lucas));
// Ejercicio 2
var sumOrConcatenate = function (arg1, arg2) {
    if (typeof (arg1) === typeof (arg2) && typeof (arg1) === "number") {
        return +arg1 + +arg2;
    }
    else if (typeof (arg1) === typeof (arg2)) {
        return "".concat(arg1, " - ").concat(arg2);
    }
    else {
        return "".concat(arg1, " : ").concat(arg2);
    }
};
var resultado = sumOrConcatenate('12', 10);
console.log(resultado);
// Definiendo vehicle tipo car para realizar las comprobaciones 
var vehicle1 = {
    tires: 4,
    pressPedal: function () {
        console.log('pressPedal');
    },
    turnOnEngine: function () {
        console.log('turnOnEngine');
    }
};
// Definiendo vehicle tipo Motorcicle para realizar las comprobaciones ;
var vehicle = {
    tires: 2,
    openThrottle: function () {
        console.log('openThrottle');
    },
    turnOnEngine: function () {
        console.log('turnOnEngine');
    }
};
function isACar(vehicle) {
    vehicle.turnOnEngine();
    return vehicle.pressPedal !== undefined;
}
if (isACar(vehicle)) {
    vehicle.pressPedal();
}
else {
    vehicle.openThrottle();
}
// Ejercicio 4
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var removeFirstEntry = function (array) {
    array.shift();
    return array;
};
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray);
console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
