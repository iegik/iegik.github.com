import { readFileSync } from '@app/utils';
const LinkedinIcon = readFileSync('@app/icons/linkedin-icon.svg');
const LinkedinLogo = readFileSync('@app/icons/linkedin-logo.svg');
const GitHubIcon = readFileSync('@app/icons/github-icon.svg');
const GitHubLogo = readFileSync('@app/icons/github-logo.svg');
const StackOverflowIcon = readFileSync('@app/icons/stackoverflow-icon.svg');
const StackOverflowLogo = readFileSync('@app/icons/stackoverflow-logo.svg');
const JsFiddleIcon = readFileSync('@app/icons/jsfiddle-icon.svg');
const JsFiddleLogo = readFileSync('@app/icons/jsfiddle-logo.svg');
const CodersRankIcon = readFileSync('@app/icons/codersrank-icon.svg');
const CodersRankLogo = readFileSync('@app/icons/codersrank-logo.svg');
const SlotMachineIcon = readFileSync('@app/icons/slot-machine.svg');

export default {
  'linkedin-icon': LinkedinIcon,
  'linkedin-logo': LinkedinLogo,
  'github-icon': GitHubIcon,
  'github-logo': GitHubLogo,
  'stackoverflow-icon': StackOverflowIcon,
  'stackoverflow-logo': StackOverflowLogo,
  'jsfiddle-icon': JsFiddleIcon,
  'jsfiddle-logo': JsFiddleLogo,
  'codersrank-icon': CodersRankIcon,
  'codersrank-logo': CodersRankLogo,
  'slot-machine-icon': SlotMachineIcon,
}
