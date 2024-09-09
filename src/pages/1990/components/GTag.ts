import { Script, ScriptProps } from "./ui/script";

export type GTagProps = { gtmId: string; } & ScriptProps
export const GTag = ({ nonce, gtmId }: GTagProps) => `
    ${Script({ async: true, nonce, src: `https://www.googletagmanager.com/gtag/js?id=${gtmId}`})}
    ${Script({ srcDoc: './src/lib/gtag.js', nonce, postfix: `gtag('config', '${gtmId}');\n` })}
`;
