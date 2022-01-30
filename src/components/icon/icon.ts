const Icon = ({ id, className, name }) => `
    <svg id="${id}" class="${className}" preserveAspectRatio="xMidYMid meet">
      <use xlink:href="#sprite-${name}" />
    </svg>
  `
export default Icon
