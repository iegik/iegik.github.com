import { Script, ScriptProps } from "./ui/script";

export type GTMProps = { gtmId: string; } & ScriptProps
export const GTMHead = ({ nonce, gtmId }: GTMProps) => `
    ${Script({ nonce, srcDoc: './src/lib/gtm.js', iife: `window,document,'script','dataLayer','${gtmId}','${nonce}'` })}
`;

export const GTMBody = ({ nonce, gtmId }: GTMProps) => `<noscript><iframe nonce="${nonce}" src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden;position: absolute;"></iframe></noscript>`;
