import { escapeHTML } from "@app/services/web-utils";
import { readFileSync } from '@app/utils';

export type ImageProps = { src: string; }
export const Image = ({ src }: ImageProps) => `<pre><font size=1>${escapeHTML(readFileSync(src))}</font></pre>`
