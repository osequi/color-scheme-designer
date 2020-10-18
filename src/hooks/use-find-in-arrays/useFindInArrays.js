/**
 * Returns an array element identified by an element in another array.
 * @param  {array} targetArray Return the element from this array.
 * @param  {array} sourceArray Look for the identifier in this array.
 * @param  {any}   identifier  The element to look for.
 * @return {any}             The resulting element.
 * Example: findInArrays([preset1, preset2], ['preset1', 'preset2'], 'preset1') => preset1
 */
const findInArrays = (targetArray, sourceArray, identifier) => {
  const index = sourceArray.findIndex((item) => item === identifier);

  return index === -1 ? null : targetArray[index];
};

/**
 * The hook version.
 */
const useFindInArrays = (targetArray, sourceArray, identifier) => {
  return findInArrays(targetArray, sourceArray, identifier);
};

export default useFindInArrays;
export { findInArrays };
