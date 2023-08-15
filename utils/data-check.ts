/**
 * 判断是否存在 key
 * @param obj 判断对象
 * @param key 判断 key值
 * @return {Boolean} 是否存在标识
 */
export function hasKey(obj: unknown, key: string): boolean {
  if (!obj) return false;
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}