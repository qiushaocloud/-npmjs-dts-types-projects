### 介绍
主要用于 NodeJS 环境，ES 模块的适配，例如: __dirname 通过适配的 getImportDirName 获取

### 项目源码
* 自建 gitlab 地址: https://gitlab.qiushaocloud.top/qiushaocloud/npmjs-dts-types-projects
* github 地址: https://github.com/qiushaocloud/npmjs-dts-types-projects

### npm 包
* 安装 npm 包: `npm install --save-dev @qiushaocloud/qesm-nodejs-adapter`

### 插件 TS 定义
``` typescript
declare global {
    const loadImportJSON: <T=any>(filepath: string, importMetaUrl: string) => Record<string, T>;
    const getImportFileName: (importMetaUrl: string) => string;
    const getImportDirName: (importMetaUrl: string) => string;

    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
      interface Global {
        loadImportJSON: <T=any>(filepath: string, importMetaUrl: string) => Record<string, T>;
        getImportFileName: (importMetaUrl: string) => string;
        getImportDirName: (importMetaUrl: string) => string;
      }
    }
}

declare module '@qiushaocloud/qesm-nodejs-adapter' {
    export function loadImportJSON <T=any>(filepath: string, importMetaUrl: string): Record<string, T>;
    export function getImportFileName (importMetaUrl: string): string;
    export function getImportDirName (importMetaUrl: string): string;
}

export {};
```

### 插件使用示例
``` javascript
// 使用方式
import '@qiushaocloud/qesm-nodejs-adapter'; // 项目入口处导入即可，然后其它模块就能直接使用

const __dirname = getImportDirName(import.meta.url);
const __filename = getImportFileName(import.meta.url);
const jsonFileContent = loadImportJSON('./config.json', import.meta.url);

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
console.log('jsonFileContent:', jsonFileContent);
```

#### 开源不易，如果对您有帮助，请您动一动您的小手，给作者点 Star，也请您多多关注分享者「[邱少羽梦](https://www.qiushaocloud.top)」

* 分享者邮箱: [qiushaocloud@126.com](mailto:qiushaocloud@126.com)
* [分享者博客](https://www.qiushaocloud.top)
* [分享者自己搭建的 gitlab](https://gitlab.qiushaocloud.top/qiushaocloud) 
* [分享者 gitee](https://gitee.com/qiushaocloud/dashboard/projects) 
* [分享者 github](https://github.com/qiushaocloud?tab=repositories) 
