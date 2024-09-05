import * as fs from 'fs'
export const writeFileSync = (path: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView) => fs.writeFileSync(path, data, { encoding: 'utf8' });
export const readFileSync = (path: fs.PathOrFileDescriptor) => fs.readFileSync(path, { encoding: 'utf8' });
