'use strict';

function Animal(animalName) {
  this.animalName = animalName;
}

Animal.prototype.render = function () {
  console.log("this function has been called")
  let animalDiv = document.createElement('div');
  animalDiv.className = `${this.animalName}Object`;
  animalDiv.textContent = this.animalName;
  let animalSection = document.querySelector(`#${this.animalName}Section`)
  animalSection.appendChild(animalDiv);
}

let makeCatButton = document.getElementById('makeCat');
makeCatButton.addEventListener('click', catName)

function catName() {
  let cat = new Animal('cat');
  cat.render();
}

let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', dogName)

function dogName() {
  let dog = new Animal('dog');
  dog.render();
}

let makeSheepButton = document.getElementById('makeSheep');
makeSheepButton.addEventListener('click', sheepName)

function sheepName() {
  let sheep = new Animal('sheep');
  sheep.render();
}
let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', horseName);

function horseName() {
  let horse = new Animal('horse');
  horse.render();
}