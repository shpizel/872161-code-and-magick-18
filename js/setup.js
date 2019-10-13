'use strict';

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var QUANTITY = 4;

var getRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

var getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var getRandomName = function () {
  var reversed = getRandomNumber(0, 1);
  var ret = getRandomElement(NAMES);
  if (reversed) {
    ret = getRandomElement(SURNAMES) + ' ' + ret;
  } else {
    ret += ' ' + getRandomElement(SURNAMES);
  }
  return ret;
};

var getRandomCharacter = function () {
  return {
    name: getRandomName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS),
  };
};

var genearateRandomCharacters = function (quantity) {
  var characters = [];
  for (var i = 0; i < quantity; i++) {
    characters.push(getRandomCharacter());
  }
  return characters;
};

var getDOMElementFromCharacter = function (character) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = character.name;
  element.querySelector('.wizard-coat').style.fill = character.coatColor;
  element.querySelector('.wizard-eyes').style.fill = character.eyesColor;
  return element;
};

var fillSimilarList = function (quantity) {
  var fragment = document.createDocumentFragment();
  var characters = genearateRandomCharacters(quantity);
  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(getDOMElementFromCharacter(characters[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var showSetupBlock = function () {
  document.querySelector('.setup').classList.remove('hidden');
};

fillSimilarList(QUANTITY);
showSetupBlock();


