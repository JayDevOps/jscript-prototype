console.log('run start');
console.log('Object.__proto__');
console.log(Object.__proto__);
console.log(Object.prototype);
function GlobalAnimal(name) {
    this.name = name;
}

function getGlobalName(){
    console.log(this.name);
}
GlobalAnimal('Dog');
getGlobalName();

var animal={};
function ObjectAnimal(name) {
    this.name = name;
}

function getObjectName(){
    console.log(this.name);
}
animal.ObjectAnimal = ObjectAnimal;
animal.getObjectName = getObjectName;
animal.ObjectAnimal('Cow');
animal.getObjectName();

console.log(GlobalAnimal.prototype);
console.log(GlobalAnimal.__proto__);

console.log(animal.prototype);
console.log(animal.__proto__);

var undefinedPrototypeAnimal = (arg1) => {};
console.log(undefinedPrototypeAnimal.prototype);
console.log(undefinedPrototypeAnimal.__proto__);

var definedPrototypeAnimal = function DefinedAnmial() {};
console.log(definedPrototypeAnimal.prototype);
console.log(definedPrototypeAnimal.__proto__);

function AddToAllObjectProto() {

}
var didnotAddOnlyToThis = {};
didnotAddOnlyToThis.__proto__.AddToAllObjectProto = AddToAllObjectProto;
console.log('didnotAddOnlyToThis');
console.log(didnotAddOnlyToThis.__proto__);
console.log('Object.prototype');
console.log(Object.prototype);

function AddOnlyToAddedProto() {

}
var didAddOnlyToThis = {};

didAddOnlyToThis.__proto__ = {
    AddOnlyToAddedProto: AddOnlyToAddedProto
  };
console.log('didAddOnlyToThis');
console.log(didAddOnlyToThis.__proto__);
console.log('Object.prototype');
console.log(Object.prototype);
console.log(Object.__proto__);
console.log('run end');
