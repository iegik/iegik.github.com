import { escapeHTML } from "@app/services/web-utils";
import { readFileSync } from '@app/utils';

export type ImageProps = { src: string; ascii: string }
export const Image = ({ src, ascii }: ImageProps) => `<pre><font size=1><img width="128" height="128" src="${src}" alt="${escapeHTML(readFileSync(ascii))}" /></font></pre>`
