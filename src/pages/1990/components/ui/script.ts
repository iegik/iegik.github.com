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
  crossorigin?: string;
}

export const Script = ({ srcDoc, src, nonce, async, prefix, postfix, iife, crossorigin, integrity }: ScriptProps) => {
  const body = `${prefix || ''}${srcDoc ? readFileSync(srcDoc) : ''}${postfix || ''}`
  return `<script ${async ? 'async' : ''} crossorigin="${crossorigin}" integrity="${integrity}" nonce="${nonce}" ${src ? `src="${src}"` : ''}>${iife ? `(${body})(${iife}})` : body}</script>`;
}
