'use strict';

var BASE_LEFT = 110;
var BASE_TOP = 10;
var SHADOW_OFFSET = 10;
var SHADOW_COLOR = "rgba(0, 0, 0, 0.7)";
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = 'white';
var CLOUD_STROKE_COLOR = 'black';
var CLOUD_PADDING = 30;
var FONT_COLOR = CLOUD_STROKE_COLOR;
var FONT_SIZE = 16;
var FONT = FONT_SIZE + "px PT Mono";
var TEXT_MARGIN_TOP = 5;

var histogramHeight = 150;
var columnWidth = 40;
var columnPadding = 50;
var myColor = 'rgba(255, 0, 0, 1)';

var getRandomLightnessBlueColor = function () {
  var random = Math.ceil(Math.random() * 100);
  return 'hsl(240, 100%, ' + random + '%)';
};

var drawCloud = function (ctx) {
  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(BASE_LEFT + SHADOW_OFFSET, BASE_TOP + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(BASE_LEFT, BASE_TOP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = CLOUD_STROKE_COLOR;
  ctx.strokeRect(BASE_LEFT, BASE_TOP, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawCongrats = function (ctx) {
  ctx.font = FONT;
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText("Ура вы победили!", BASE_LEFT + CLOUD_PADDING, BASE_TOP + CLOUD_PADDING);
  ctx.fillText("Список результатов:", BASE_LEFT + CLOUD_PADDING, BASE_TOP + FONT_SIZE + CLOUD_PADDING + TEXT_MARGIN_TOP);
};

var drawHistogram = function (ctx, names, times) {
  var timesMax = times.sort()[times.length - 1];

  for (var i = 0; i < names.length; i++) {
    var time = Math.round(times[i]);

    ctx.fillStyle = (names[i].toLowerCase() === 'вы') ? myColor : getRandomLightnessBlueColor();

    var barHeight = Math.round(time * histogramHeight / timesMax);

    var left = BASE_LEFT + CLOUD_PADDING + i * (columnPadding + columnWidth);
    var top = BASE_TOP + CLOUD_HEIGHT - CLOUD_PADDING - barHeight;
    ctx.fillRect(left, top, columnWidth, barHeight);
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(time, left, top - FONT_SIZE + TEXT_MARGIN_TOP, columnWidth);
    ctx.fillText(names[i], left, top + barHeight + FONT_SIZE + TEXT_MARGIN_TOP, columnWidth);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  drawCongrats(ctx);
  drawHistogram(ctx, names, times);
};

