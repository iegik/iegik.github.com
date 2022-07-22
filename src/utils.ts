export * from './utils.node';
// export * from './utils.deno';

const timestamp = new Date();
export const release = `v3.1.0-${timestamp.toJSON()}`
export const nonce = btoa(`${Number(timestamp)}`).slice(10,18)
