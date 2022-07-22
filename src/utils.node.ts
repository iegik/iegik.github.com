import * as fs from 'fs'
export const writeFileSync = (path, data) => fs.writeFileSync(path, data, { encoding: 'utf8' });
export const readFileSync = (path, data) => fs.readFileSync(path, { encoding: 'utf8' });
