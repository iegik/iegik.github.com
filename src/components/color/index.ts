import { Color as ColorFeatures } from '@app/components/color/color'
import { Component } from '@app/core/Component'

export class Color extends Component {
  tag = 'input'
  constructor() {
    super();
    ColorFeatures.apply(this, arguments);
    this.setAttribute('type', 'color');
  }
}
