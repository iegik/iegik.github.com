export * from './utils.node.ts';
// export * from './utils.deno.ts';

const timestamp = new Date();
export const release = `v3.1.0-${timestamp.toJSON()}`
export const nonce = btoa(`${Number(timestamp)}`).slice(10,18)
