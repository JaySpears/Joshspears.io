/**
 * function isExample, example for simple redux action.
 *
 * @param {Boolean} bool
 */
export function isExample(bool) {
  return {
    type: 'IS_EXAMPLE',
    isAuthorized: bool
  }
}
