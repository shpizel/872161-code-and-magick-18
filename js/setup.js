'use strict';

var NAMES = 'Иван, Хуан Себастьян, Мария, Кристоф, Виктор, Юлия, Люпита, Вашингтон'.split(',');
var SURNAMES = 'да Марья, Верон, Мирабелла, Вальц, Онопко, Топольницкая, Нионго, Ирвинг'.split(',');
var COAT_COLORS = 'rgb(101, 137, 164); rgb(241, 43, 107); rgb(146, 100, 161); rgb(56, 159, 117); rgb(215, 210, 55); rgb(0, 0, 0)'.split(';');
var EYES_COLORS = 'black, red, blue, yellow, green'.split(',');

var random = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

var getRandomElement = function (array) {
  return array[random(0, array.length - 1)].trim();
};

var getRandomName = function () {
  var reversed = random(0, 1);
  var ret = getRandomElement(NAMES);
  if (reversed) {
    ret = getRandomElement(SURNAMES) + ' ' + ret;
  } else {
    ret += ' ' + getRandomElement(SURNAMES);
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

document.querySelector('.setup').classList.remove('hidden');

var characters = [];
for (var i = 0; i < 4; i++) {
  characters.push(getRandomCharacter());
}

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

for (var c = 0; c < characters.length; c++) {
  var cloned = template.cloneNode(true);

  cloned.querySelector('.setup-similar-label').textContent = characters[c].name;
  cloned.querySelector('.wizard-coat').style.fill = characters[c].coatColor;
  cloned.querySelector('.wizard-eyes').style.fill = characters[c].eyesColor;

  fragment.appendChild(cloned);
}

document.querySelector('.setup-similar-list').appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
