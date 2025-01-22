import { Script, ScriptProps } from "./ui/script";

export type SentryProps = { integrity?: string; release: string; environment: string; dsn: string; projectId: string; tracesSampleRate: number; replaysSessionSampleRate: number; replaysOnErrorSampleRate: number; } & ScriptProps
export const Sentry = ({ nonce, integrity, projectId, ...options }: SentryProps) => `
    ${Script({ async: true, nonce, src: `https://browser.sentry-cdn.com/8.51.0/bundle.tracing.replay.debug.min.js`, integrity, crossorigin: 'anonymous' })}
    ${Script({ srcDoc: './src/lib/sentry.js', nonce, iife: JSON.stringify(options) })}
`;
