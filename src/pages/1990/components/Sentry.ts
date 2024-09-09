import { Script, ScriptProps } from "./ui/script";

export type SentryProps = { integrity?: string; release: string; environment: string; dsn: string; projectId: string; } & ScriptProps
export const Sentry = ({ nonce, integrity, projectId, ...options }: SentryProps) => `
    ${Script({ async: true, nonce, src: `https://browser.sentry-cdn.com/8.29.0/bundle.tracing.min.js`, integrity, })}
    ${Script({ srcDoc: './src/lib/sentry.js', nonce, iife: JSON.stringify(options) })}
`;
