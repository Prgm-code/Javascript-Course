// Ejercicio 1

interface Person {
    name:string;
    age:number ;
    profession: string;
    //arr:(person : Person ) => string;
   
}
let arr = (person : Person) :(string|number)[] => {
    return [person.name,person.age,'profession']
    }


const lucas: Person = {
    name: 'Lucas ',
    age: 28,
    profession : 'Full Stack',
   // arr: ()
}
console.log(arr(lucas))

// Ejercicio 2

const sumOrConcatenate = function(
    arg1:number|string,
    arg2:number|string ):(number|string) {
        if(typeof(arg1) === typeof(arg2) && typeof(arg1) === "number"){
        return arg1 + arg2;
           
        }else if  (typeof(arg1) === typeof(arg2)){
            return `${arg1} - ${arg2}`
        }else{
            return `${arg1} : ${arg2}`
        }
    }
let resultado = sumOrConcatenate('12',10)
console.log(resultado)

// Ejercicio 3
interface Vehicle {
    tires: number;
    turnOnEngine() : void;
}
interface Car extends Vehicle {
  
    pressPedal(): void;
}
interface Motorcicle extends Vehicle {
 
    openThrottle(): void;

}
// Definiendo vehicle tipo car para realizar las comprobaciones 
let vehicle1: Car =  {
    tires: 4 ,
    pressPedal: ()=>{ 
        console.log('pressPedal')
        },
            turnOnEngine: ()=>{ 
        console.log('turnOnEngine')
        },

    }

// Definiendo vehicle tipo Motorcicle para realizar las comprobaciones ;
let vehicle: Motorcicle =  {
    tires: 2 ,
    openThrottle: ()=>{ 
        console.log('openThrottle')
        },
            turnOnEngine: ()=>{ 
        console.log('turnOnEngine')
        },

    };


function isACar (vehicle: Car | Motorcicle): vehicle is Car {
    vehicle.turnOnEngine();
    return (vehicle as Car).pressPedal !== undefined;

}  
if(isACar(vehicle)) {
    vehicle.pressPedal();
    }else{
    vehicle.openThrottle()   
    }



// Ejercicio 4
const strArray:string[] = ['Hello','World','Im','a','Full','Stack','Developer'];
const numArray:number[] = [1,2,3,4,5,6,7];
const mixedArray:Array<number|string> = ['Hello','I','have',3,'tasks'];
const unsupportedArray = [{name:'Lucas',surname:'Fernandez'},'Hello',22];

let removeFirstEntry = function (array:Array<number|string>) { 
    array.shift();
    return array;

    }
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray);

console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
