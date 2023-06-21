// 1
import { Art } from 'ArtForMindfulness';

// 2
class ArtForMindfulness {
 
  // 3
  constructor() {
  
    // 4
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.drawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.direction = true;
  }
  
  // 5
  draw(e) {
    // 6
    if (!this.drawing) return;
  
    // 7
    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;
  
    // 8
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
  
    // 9
    this.lastX = e.offsetX;
    this.lastY = e.offsetY;
  
    // 10
    this.hue++;
  
    // 11
    if (this.hue >= 360) {
      this.hue = 0;
    }
  
    // 12
    if (this.ctx.lineWidth >= 50 || this.ctx.lineWidth <= 1) {
      this.direction = !this.direction;
    }
  
    // 13
    if(this.direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }
  }
  
  // 14
  init() {
    // 15
    this.canvas.addEventListener('mousedown', () => {
      this.drawing = true;
      this.lastX = e.offsetX;
      this.lastY = e.offsetY;
    });
  
    // 16
    this.canvas.addEventListener('mouseup', () => {
      this.drawing = false;
    });
  
    // 17
    this.canvas.addEventListener('mousemove', (e) => {
      this.draw(e);
    });
  
    // 18
    this.canvas.addEventListener('mouseout', () => {
      this.drawing = false;
    });
  }
}

// 19
const artForMindfulness = new ArtForMindfulness();

// 20
window.addEventListener('load', () => {
  artForMindfulness.init();
});