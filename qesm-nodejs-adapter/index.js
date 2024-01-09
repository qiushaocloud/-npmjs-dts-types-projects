import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createRequire} from 'node:module';

export const loadImportJSON = (filepath, importMetaUrl) => {
    const reg = /\S+.json$/g;
    if (reg.test(filepath)) {
      const require = createRequire(importMetaUrl);
      return require(filepath);
    }
    throw new Error('loadJSON 的参数必须是一个json文件');
};

export const getImportFileName = (importMetaUrl) => {
    return fileURLToPath(importMetaUrl);
};

export const getImportDirName = (importMetaUrl) => {
    return path.dirname(fileURLToPath(importMetaUrl));
};

Object.defineProperty(global, 'loadImportJSON', {
    get () {
      return loadImportJSON;
    },
    enumerable: true,
    configurable: false,
    // writable: false,
});
  
Object.defineProperty(global, 'getImportFileName', {
    get () {
        return getImportFileName;
    },
    enumerable: true,
    configurable: false,
    // writable: false,
});

Object.defineProperty(global, 'getImportDirName', {
    get () {
        return getImportDirName;
    },
    enumerable: true,
    configurable: false,
    // writable: false,
});