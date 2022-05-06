"use strict";

p5.disableFriendlyErrors = true;

const window_diff = 20;

const desired_fps = 60;
let last_fps_time = 0;
let last_fps = 0;

let game;

function preload() {
  preload_sounds();
}

function setup() {
  createCanvas(windowWidth - window_diff, windowHeight - window_diff);
  frameRate(desired_fps);
  game = new Game();
}

function draw() {
  push();
  game.update();
  game.draw();
  pop();
  
  if (millis() - last_fps_time > 1000) {
    last_fps_time = millis();
    last_fps = Math.round(frameRate());
  }
  push();
  strokeWeight(0);
  textAlign(RIGHT, BOTTOM);
  textSize(12);
  fill(0);
  text("FPS: " + last_fps, width - 10, height - 10);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth - window_diff, windowHeight - window_diff);
  game.on_resize();
}

function mousePressed() {
  return game.on_mouse_press();
}

function mouseDragged() {
  return game.on_mouse_drag();
}

function mouseClicked() {
  game.mouse_clicked()
}

function mouseReleased() {
  return game.on_mouse_release();
}

function mouseWheel(event) {
  return game.on_mouse_wheel(event);
}
