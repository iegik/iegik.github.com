import { escapeHTML } from "@app/services/web-utils";
import { readFileSync } from "@app/utils";

export type ScriptProps = {
  nonce: string;
  src?: string;
  srcDoc?: string;
  prefix?: string;
  async?: boolean;
}

export const Script = ({ srcDoc, src, nonce, async, prefix }: ScriptProps) => `<script ${async ? 'async' : ''} nonce="${nonce}" ${src ? `src="${src}"` : ''}>${prefix || ''}${srcDoc ? escapeHTML(readFileSync(srcDoc)) : ''}</script>`;
