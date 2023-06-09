import WebGLConstants from "../Core/WebGLConstants.js";

/**
 * Determines the function used to compare two depths for the depth test.
 *
 * @enum {number}
 */
const DepthFunction = {
  /**
   * The depth test never passes.
   *
   * @type {number}
   * @constant
   */
  NEVER: WebGLConstants.NEVER,

  /**
   * The depth test passes if the incoming depth is less than the stored depth.
   *
   * @type {number}
   * @constant
   */
  LESS: WebGLConstants.LESS,

  /**
   * The depth test passes if the incoming depth is equal to the stored depth.
   *
   * @type {number}
   * @constant
   */
  EQUAL: WebGLConstants.EQUAL,

  /**
   * The depth test passes if the incoming depth is less than or equal to the stored depth.
   *
   * @type {number}
   * @constant
   */
  LESS_OR_EQUAL: WebGLConstants.LEQUAL,

  /**
   * The depth test passes if the incoming depth is greater than the stored depth.
   *
   * @type {number}
   * @constant
   */
  GREATER: WebGLConstants.GREATER,

  /**
   * The depth test passes if the incoming depth is not equal to the stored depth.
   *
   * @type {number}
   * @constant
   */
  NOT_EQUAL: WebGLConstants.NOTEQUAL,

  /**
   * The depth test passes if the incoming depth is greater than or equal to the stored depth.
   *
   * @type {number}
   * @constant
   */
  GREATER_OR_EQUAL: WebGLConstants.GEQUAL,

  /**
   * The depth test always passes.
   *
   * @type {number}
   * @constant
   */
  ALWAYS: WebGLConstants.ALWAYS,
};
export default Object.freeze(DepthFunction);
