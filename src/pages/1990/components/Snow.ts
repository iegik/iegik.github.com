import { Fragment } from "@app/core/Fragment";
import { html } from "@app/core/html";
import { Script } from "./ui/script";

type SnowCanvasProps = { children: string, speed: number, }
const SnowCanvas = ({ children, speed = 1 }: SnowCanvasProps) =>
  html`
    <marquee
      direction="down"
      scrollamount="5"
      scrolldelay="${60 * speed}"
      class="snowCanvas"
    >
      <noscript><pre>${children}</pre></noscript>
    </marquee>
  `;

const randomFlakes = ({
  width = 1,
  height = 1,
  avg = 1,
  snowFlake = "."
} = {}) => {
  const cols = ~~(width / 6),
    rows = ~~(height / 8);
  const numFlakes = ~~(cols * rows * avg);

  let children = "";
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += Math.random() < numFlakes / (rows * cols) ? snowFlake : "&nbsp;";
    }
    children += row + "\n"; // Add row to content
  }
  return children;
};

const createSnowFlakeLayers = ({
  speed = 1,
  count = 1,
  step = 0.25,
  ...rest
}) =>
  [...new Array(count)].map((_, index) =>
    SnowCanvas({
      children: randomFlakes(rest),
      speed: speed + (index + 1) * step
    })
  );

export const Snow = ({
  width = 800,
  height = 600,
  avg = 0.01,
  snowFlake = "*",
  nonce = '',
} = {}) => {
  const time = ~~((height / 8) * 1000 * 0.5);

  const flow = Fragment({
    children: createSnowFlakeLayers({
      width,
      height,
      avg,
      snowFlake,
      speed: 1,
      count: 3,
      step: 0.25
    })
  });

  typeof window !== 'undefined' && setTimeout(
    ((flow) => () => {
      createSnowFlakeLayers({
        width,
        height,
        avg,
        snowFlake,
        speed: 1,
        count: 3,
        step: 0.5
      }).forEach((item) => {
        if (item == null) return;
        flow.append?.(item);
      });
    })(flow as Element),
    time
  );

  return html`
  ${flow}
  ${Script({ srcDoc: './src/lib/snow.js', nonce, })}
  <style nonce="${nonce}">
    .snowCanvas {
      position: absolute;top: 0;
      color:rgba(200,200,200,0.8);
      user-select: none;
      pointer-events: none;
      width: 424px;
      margin-left: -212px;
    }
    [width="768px"] .snowCanvas {
      width: 768px;
      margin-left: -384px;
    }
  </style>`;
};

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.appendChild(Snow());
// });
