// deno-lint-ignore-file no-undef no-extra-semi
const isReduced = window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches === true;
let x1:number;
let x2:number;
let x:number;
let y:number;
let k = 16;
let requestID: number;
let backgroundPosition: string;
let body:HTMLElement | null = <HTMLInputElement>document.querySelector('#root');
let html:HTMLElement | null = document.documentElement;
let width = body && html && Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
let height = body && html && Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

x1 = x2 = x = y = 0;
width && width > 300 && addEventListener("mousemove", function (a: MouseEvent) {
  x = a.pageX, y = a.pageY
});

function calculate(){
  x1 -= .5;
  x2 -= 5;
  if (height == null || width == null) return
  backgroundPosition = `${width / 2 - 2762 - x / (5 * k)  }px ${
    height - 129 + (20 - y) / (10 * k)  }px, ${
    (x1 - x) / (10 * k)  }px 60%, ${
    (x2 - x) / k  }px 40%`;
}

function animate() {
  calculate();
  if (!body?.style) return;
  body.style.backgroundPosition = backgroundPosition;
  if(requestID){
    window.cancelAnimationFrame(requestID);
  }
  requestID = window.requestAnimationFrame(animate);
}
!isReduced && animate();
