import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
export const PATH_DB = path.resolve(pathToWorkDir, 'src', 'db', 'db.json');


