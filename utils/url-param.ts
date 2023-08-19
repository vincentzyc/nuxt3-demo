type UrlParamBack = null | string | Record<string, any>;

export function getUrlParam(name: string): null | string;
export function getUrlParam(name: string, newUrl: string): null | string;
export function getUrlParam(name: null, newUrl: string): Record<string, any>;
export function getUrlParam(): Record<string, any>;

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
export function getUrlParam(name?: string | null, newUrl?: string) {
  const href = newUrl || window?.location?.href,
    i = href.indexOf('?');
  if (i < 0) return null;
  const str = href.slice(i);
  if (!str) return null;
  const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g);
  if (!arr) return null;
  const obj: UrlParamBack = {};
  arr.forEach(v => {
    const temp = v.split('=');
    if (temp.length > 0) {
      obj[temp[0]] = temp[1];
    }
  });
  if (name) return obj[name];
  return obj;
}
