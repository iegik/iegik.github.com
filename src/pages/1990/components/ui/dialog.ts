import { Action } from "./action";
import { readFileSync } from '@app/utils';
import { Fragment } from "../core/fragment";

export const Dialog = ({ src, title, children, l10n = (a) => a, okServices, cancelServices }: DialogProps) =>
  `<fieldset bgcolor="green" style="display:none;">
    <legend>${title}</legend>
    ${src ? readFileSync(src) : ''}
    ${Fragment({ children })}
    <br/>
    ${okServices ? Action({ title: l10n?.('ok'), services: okServices }) : ''}
    ${cancelServices ? Action({ title: l10n?.('cancel'), services: cancelServices }) : ''}
  </fieldset>`