/**
 * 获取指定名称的CSS变量的值。
 *
 * @param {string} name - CSS变量的名称。
 * @return {string | null} CSS变量的值，如果变量未定义，则返回null。
 */
export const getCssVariable = (name: string): string | null => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name);
  return value === '' ? null : value;
};
