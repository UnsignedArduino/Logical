"use strict";

const component_width = 50;
const component_height = 50;

const component_stroke_weight = 1;
const component_stroke = 0;  // black 
const component_fill = 255;  // white
const component_powered_fill = [0, 255, 255];  // cyan

class Component {
  constructor(pos) {
    this.pos = pos;
    this.mouse_pressed = false;
  }

  mouse_overlapping() {
    return collidePointRect(mouseX, mouseY, 
                            (this.pos.x * zoom + camera.x), (this.pos.y * zoom + camera.y), 
                            component_width * zoom, component_height * zoom);
  }

  get center_coord() {
    return p5.Vector.add(this.pos, createVector(component_width / 2, components_height / 2));
  }

  on_left_mouse_click() {
    
  }

  on_right_mouse_click() {
    
  }

  on_left_mouse_release() {
    
  }

  on_right_mouse_release() {
    
  }

  handle_mouse() {
    if (this.mouse_overlapping() && !(this in hovering)) {
      hovering.push(this);
    }
    if (hovering_on_button()) {
      return;
    }
    if (mouseIsPressed) {
      if (this.mouse_overlapping()) {
        if (!this.mouse_pressed) {
          this.mouse_pressed = true;
          if (mouseButton === LEFT) {
            this.on_left_mouse_click();
          } else if (mouseButton === RIGHT) {
            this.on_right_mouse_click();
          }
        }
      }
    } else {
      if (this.mouse_pressed) {
          this.mouse_pressed = false;
          if (mouseButton === LEFT) {
            this.on_left_mouse_release();
          } else if (mouseButton === RIGHT) {
            this.on_right_mouse_release();
          }
        }
    }
  }
  
  update() {
    this.handle_mouse();
  }

  draw(outline) {
    
  }
}
