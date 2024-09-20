export class UrlParams {

    constructor(params: any, options?: UrlParamsOptions) {
        const keys = Object.keys(params);
        for (let key of keys) {
            if (params[key] || (typeof params[key] === 'number' && params[key] === 0)) {
                if(options && options.noEncode) {
                    this[key] = params[key].toString();
                } else {
                    this[key] = encodeURIComponent(params[key].toString());
                }
            }
        }
    }

    [key: string]: string;

}

interface UrlParamsOptions {
    noEncode?: boolean;
}