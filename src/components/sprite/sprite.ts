import LinkedinIcon from '@app/icons/linkedin-icon.svg';
import LinkedinLogo from '@app/icons/linkedin-logo.svg';
import GitHubIcon from '@app/icons/github-icon.svg';
import GitHubLogo from '@app/icons/github-logo.svg';
import StackOverflowIcon from '@app/icons/stackoverflow-icon.svg';
import StackOverflowLogo from '@app/icons/stackoverflow-logo.svg';
import JsFiddleIcon from '@app/icons/jsfiddle-icon.svg';
import JsFiddleLogo from '@app/icons/jsfiddle-logo.svg';

const icons = {
  'linkedin-icon': LinkedinIcon,
  'linkedin-logo': LinkedinLogo,
  'github-icon': GitHubIcon,
  'github-logo': GitHubLogo,
  'stackoverflow-icon': StackOverflowIcon,
  'stackoverflow-logo': StackOverflowLogo,
  'jsfiddle-icon': JsFiddleIcon,
  'jsfiddle-logo': JsFiddleLogo,
}

const Sprite = () => `
  <svg xmlns="http://www.w3.org/2000/svg" display="none">
  ${Object.entries(icons).map(([name, icon]) => icon
    .replace('xmlns="http://www.w3.org/2000/svg"', `id="sprite-${name}"`)
    .replaceAll(/\bsvg\b/g, 'symbol')
  )}
  </svg>
`

export default Sprite
