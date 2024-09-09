import { Script, ScriptProps } from "./ui/script";

export type GTMProps = { gtmId: string; } & ScriptProps
export const GTM = ({ nonce, gtmId }: GTMProps) => `
    ${Script({ async: true, nonce, src: `https://www.googletagmanager.com/gtag/js?id=${gtmId}`})}
    ${Script({ srcDoc: './src/lib/gtm.js', nonce, prefix: `gtag('config', '${gtmId}');\n` })}
`;
