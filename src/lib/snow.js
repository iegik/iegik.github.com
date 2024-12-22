(() => {
  const CANVAS_CONTEXT_TYPE = '2d';
  const CANVAS_CSS_WIDTH = window.innerWidth;
  const CANVAS_CSS_HEIGHT = window.innerHeight;
  const CANVAS_CSS_MARGIN = '0 auto';

  // Do Not Edit
  let canvas = document.createElement('canvas');
  let context = canvas.getContext(CANVAS_CONTEXT_TYPE);

  canvas.style.width = CANVAS_CSS_WIDTH;
  canvas.style.height = CANVAS_CSS_HEIGHT;
  canvas.style.margin = CANVAS_CSS_MARGIN;
  canvas.style.imageRendering = 'pixelated';
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  // Set canvas styles
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  // canvas.style.zIndex = "9999";

  // document.body.appendChild(canvas);
  document.body.insertBefore(canvas, document.body.firstChild);

  ((a, b, c, d, r) => {
    // Create and append a full-screen canvas
    d.addEventListener('DOMContentLoaded', () => {
      let width = (a.width = window.innerWidth);
      let height = (a.height = window.innerHeight);

      const isMobile = () => width <= 768;
      const snowflakeSize = isMobile() ? 1 : 4;

      window.snowflakes = [];
      let windDirection = 0;

      // Get background color from computed styles
      // const backgroundColor = '#0000';
      const backgroundColor =
        window.getComputedStyle(b).backgroundColor;
      const bgColorArray = backgroundColor.match(/\d+/g).map(Number); // Parse RGB values

      function autoCrop(array) {
        let top = null, bottom = null, left = null, right = null;

        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== 0) {
              if (top === null) top = i; // First non-zero row
              bottom = i; // Update last non-zero row
              if (left === null || j < left) left = j; // Smallest column index
              if (right === null || j > right) right = j; // Largest column index
            }
          }
        }

        // If no non-zero elements, return an empty array
        if (top === null) return [];

        // Extract the subarray between top-bottom rows and left-right columns
        const cropped = [];
        for (let i = top; i <= bottom; i++) {
          cropped.push(array[i].slice(left, right + 1));
        }

        return cropped;
      }

      function posneg() {
        return Math.random() > 0.5 ? -1 : 1
      }

      const tetrisShapes = [
        // I Shape (4x1 or 1x4)
        [[1, 1, 1, 1]],
        // O Shape (2x2)
        [
          [1, 1],
          [1, 1],
        ],
        // T Shape
        [
          [0, 1, 0],
          [1, 1, 1],
        ],
        // L Shape
        [
          [1, 0, 0],
          [1, 1, 1],
        ],
        // J Shape
        [
          [0, 0, 1],
          [1, 1, 1],
        ],
        // S Shape
        [
          [0, 1, 1],
          [1, 1, 0],
        ],
        // Z Shape
        [
          [1, 1, 0],
          [0, 1, 1],
        ],
      ];

      const maxFlakes = 500;

      function drawGround() {
        c.beginPath(); // Start a new path
        c.moveTo(0, window.innerHeight); // Move the pen to (30, 50)
        c.lineWidth = 2;
        c.strokeStyle = '#ffffff';
        c.lineTo(width, window.innerHeight); // Draw a line to (150, 100)
        c.stroke(); // Render the path
        c.closePath();
      }
      function drawBackground() {
        // Draw underlying content snapshot to detect color changes
        c.save();

        // c.globalCompositeOperation = 'destination-over';
        // c.globalCompositeOperation = "source-over";
        c.fillStyle = backgroundColor; // Simulated background color
        c.fillRect(0, 0, width, height);
        c.restore();
      }

      drawBackground();
      c.save();

      class Snowflake {
        constructor(){
          // Randomly choose a Tetris shape
          this.selectedShape =
            tetrisShapes[
              Math.floor(Math.random() * tetrisShapes.length)
            ];
          this.lastRotatedAt = +new Date();
          this.x = Math.random() * width;
          this.y = Math.random() * height - height;
          this.size = snowflakeSize;
          this.speedX = Math.random() * 0.5 - 0.25;
          this.speedY = Math.random() * 1 + 0.5;
          this.rotation = Math.random() * 360;
          this.pixelPattern = [];
          this.generatePixelPattern();
          this.rotateRandomly();
          this.pixelPattern = autoCrop(this.pixelPattern);
        }

        generatePixelPattern() {
          for (let i = 0; i < this.size; i++) {
            const row = [];
            for (let j = 0; j < this.size; j++) {
              // row.push(Math.random() < 0.5 ? 1 : 0);
              row.push(this.selectedShape[i]?.[j] ? 1 : 0);
            }
            this.pixelPattern.push(row);
          }
        }

        rotateRandomly() {
          if (Math.random() < 0.5) return;
          const rotateClockwise = Math.random() < 0.5;
          this.rotate(rotateClockwise)
        }

        rotate(rotateClockwise) {
          let rotatedPattern;

          if (rotateClockwise) {
            // Rotate clockwise (90 degrees)
            rotatedPattern = [];
            for (let j = 0; j < this.size; j++) {
              const row = [];
              for (let i = this.size - 1; i >= 0; i--) {
                row.push(this.pixelPattern[i]?.[j]);
              }
              rotatedPattern.push(row);
            }
          } else {
            // Rotate counterclockwise (270 degrees)
            rotatedPattern = [];
            for (let j = this.size - 1; j >= 0; j--) {
              const row = [];
              for (let i = 0; i < this.size; i++) {
                row.push(this.pixelPattern[i]?.[j]);
              }
              rotatedPattern.push(row);
            }
          }

          this.pixelPattern = rotatedPattern;
        }

        clear() {
          if (!this.isBackground) return;
          // console.log('clearRect', this.x,
          //   this.y,
          //   this.x + this.size,
          //   this.y + this.size,)
          c.clearRect(
            this.x - 2,
            this.y - 2,
            this.size + 2,
            this.size + 2,
          );
        }

        draw() {
          if (!this.withinCanvas) return;
          // if (!this.stuck) c.restore();

          // c.translate(this.x, this.y);

          c.fillStyle = 'white';
          for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
              if (this.pixelPattern[i]?.[j] === 1) {
                c.fillRect(Math.floor(this.x + j) - 1, Math.floor(this.y + i) - 1, 1, 1);
              }
            }
          }
          // c.restore();
          // c.save();
        }

        get stuck() {
          // console.log({ withinCanvas, isBackground, pixelData: [...pixelData], bgColorArray, pixelPattern: this.pixelPattern })
          return !(
            this.withinCanvas && this.isBackground
          );
        }

        get isBackground() {
          let pixelData;
          let isBackground = true;
          for (let i = 0; i < this.pixelPattern.length; i++) {
            for (let j = 0; j < this.pixelPattern[i]?.length; j++) {
              if (this.pixelPattern[i]?.[j] === 1) {
                pixelData = [...c.getImageData(Math.floor(this.x + j), Math.floor(this.y + i), 1, 1).data];

                isBackground = isBackground &&
                  pixelData[0] === bgColorArray[0] &&
                  pixelData[1] === bgColorArray[1] &&
                  pixelData[2] === bgColorArray[2] // &&
                  // pixelData[3] === bgColorArray[3];
                // console.log([this.x + j, this.y + i,isBackground, '#' + pixelData.map(i => i.toString(16)).join(''), '#' + bgColorArray.map(i => i.toString(16)).join('')])
              }
            }
          }
          return isBackground// || Math.random() > 0.5;
        }
        get withinCanvas() {
          const withinCanvas = //this.y >= 0 &&
          this.y < height &&
          this.x >= 0 &&
          this.x < width - this.size;
          return withinCanvas
        }

        within(target) {
          const withinTarget = //this.y >= 0 &&
          this.y < target.y &&
          this.x >= 0 &&
          this.x < target.x - this.size;
          return withinTarget
        }

        update() {
          this.y += this.speedY;
          this.x += this.speedX + windDirection * posneg();

          // Reset snowflake if it goes off screen
          if (!this.withinCanvas) {
            this.y = -this.size;
            this.x = (Math.random() * width);
          }
        }
      }

      const createSnowflakes = () => {
        for (let i = 0; i <= maxFlakes - 1; i++) {
          snowflakes.push(new Snowflake());
        }
      };

      const resizeCanvas = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };

      const handleMouseMove = (event) => {
        const centerX = width / 2;
        windDirection = (event.clientX - centerX) / 1000;
      };

      const animate = () => {
        snowflakes.forEach((flake, index) => {
          drawGround()
          const stuck = !!flake.stuck;
          // console.log([index, stuck, flake.x * 1, flake.y * 1])
          const others = snowflakes.filter((a, b) => b!==index);
          // const others.find((next) => {if (flake.within(next)) return true; return false})
          if (stuck) {
            flake.draw();
            // c.save();
            // delete snowflakes[index];
            const removed = snowflakes[index]
            // console.log('removed', index, snowflakes, removed?.x, removed?.y, stuck)
            snowflakes = others
            snowflakes.push(new Snowflake());
            return;
          }
          flake.clear();

          // if (
          //   Math.random() < 0.5 &&
          //   (flake.lastRotatedAt - +new Date()) > 1000
          // ) {
          //   flake.lastRotatedAt = +new Date();
          //   flake.rotateRandomly();
          // }
          flake.update();
          flake.draw();
        });
        // console.log(snowflakes)
        r(animate);
      };

      addEventListener('resize', resizeCanvas);
      addEventListener('mousemove', handleMouseMove);

      resizeCanvas();
      createSnowflakes();
      animate();
      // let steps = 0
      // function anim() {
      //   // console.group(`step ${steps}`)
      //   animate()
      //   // console.groupEnd(`step ${steps}`)
      //   if (steps++ < 0) requestAnimationFrame(anim);
      // }
      // anim();
    });
  })(
    canvas,
    document.body,
    context,
    document,
    window.requestAnimationFrame,
  );
})(document, window);
