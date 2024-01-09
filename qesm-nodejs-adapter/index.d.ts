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