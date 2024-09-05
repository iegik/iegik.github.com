import type { ColorProps } from '@app/components/color/color';
import { Color as ColorFeatures } from '@app/components/color/color';
import { Component } from '@app/core/Component';

export class Color extends Component {
  tag = 'input';
  constructor(color: ColorProps) {
    super(color);
    // @ts-ignore
    ColorFeatures.apply(this, [color]);
    this.setAttribute('type', 'color');
  }
}
