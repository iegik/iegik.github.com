interface Props {
  className: string
  name: string
  preserveAspectRatio: string
}

const Icon:FC<Props> = ({ className, name, preserveAspectRatio = 'xMidYMid meet' }) => `
    <svg class="${className}" preserveAspectRatio="${preserveAspectRatio}">
      <use xlink:href="#sprite-${name}" />
    </svg>
  `

export default Icon
