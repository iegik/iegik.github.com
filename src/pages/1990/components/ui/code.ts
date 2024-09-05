import { escapeHTML } from "@app/services/web-utils";
import { readFileSync } from '@app/utils';

export type CodeProps = { src: string, title: string }
export const Code = ({ src, title }: CodeProps) => `<fieldset bgcolor="green">
                                                <legend>${title}</legend>
                                                <code width="120px">${escapeHTML(readFileSync(src))}</code>
                                            </fieldset>`
