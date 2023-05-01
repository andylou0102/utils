export interface ControlledPromise<T = void> extends Promise<T> {
  resolve(value: T | PromiseLike<T>): void
  reject(reason?: any): void
}

/**
 * Return a Promise with `resolve` and `reject` methods
 *
 * @example
 * ```
 * const promise = createControlledPromise()
 *
 * await promise
 *
 * // in another context:
 * promise.resolve(data)
 * ```
 */

export function createControlledPromise<T> () {
  let resolve: ((value: T | PromiseLike<T>) => void) = () => {}
  let reject: (reason?: any) => void = () => {}
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as ControlledPromise<T>
  promise.resolve = resolve
  promise.reject = reject
  return promise
}
