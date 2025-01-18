import { Action } from "@app/components";
import { escapeHTML } from "@app/services/web-utils";
import { readFileSync } from '@app/utils';

export const Dialog = ({ src, title, content, l10n }: DialogProps) =>
  `<fieldset bgcolor="green">
    <legend>${title}</legend>
    ${escapeHTML(readFileSync(src))}
    ${content}
    ${Action({})}
  </fieldset>`