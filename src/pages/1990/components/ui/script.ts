import { readFileSync } from "@app/utils";

export type ScriptProps = {
  nonce: string;
  src?: string;
  srcDoc?: string;
  prefix?: string;
  postfix?: string;
  async?: boolean;
  iife?: string;
  integrity?: string;
  crossorigin?: 'use-credentials' | '';
}

export const Script = ({ srcDoc, src, nonce, async, prefix, postfix, iife, crossorigin = '', integrity }: ScriptProps) => {
  const body = srcDoc ? readFileSync(srcDoc) : '';
  return `<script ${async ? 'async' : ''} crossorigin="${crossorigin}" ${integrity ? `integrity="${integrity}"` : ''} nonce="${nonce}" ${src ? `src="${src}"` : ''}>${prefix || ''}${iife ? `(${body})(${iife});` : body}${postfix || ''}</script>`;
}
