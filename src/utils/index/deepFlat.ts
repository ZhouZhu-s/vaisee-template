/**
 * 嵌套数组扁平化。
 *
 * @param {Array<T | T[]>} arr - 要扁平化的数组。
 * @returns {T[]} - 扁平化后的数组。
 */
export const deepFlat = <T>(arr: Array<T | T[]>): T[] => {
  return arr.reduce((res: T[], currentValue) => {
    return Array.isArray(currentValue)
      ? res.concat(deepFlat(currentValue))  
      : res.concat(currentValue);
  }, []);
}