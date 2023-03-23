import { describe, expect, it } from 'vitest'
import { createControlledPromise } from './createControlledPromise'

describe('createControlledPromise', () => {
  it('should return a promise', () => {
    expect(createControlledPromise()).toBeInstanceOf(Promise)
  })

  it('should resolve the promise', async () => {
    const promise = createControlledPromise()
    promise.resolve('foo')
    expect(await promise).toBe('foo')
  })

  it('should reject the promise', async () => {
    const promise = createControlledPromise()
    promise.reject('bar')
    try {
      await promise
      throw new Error('should not reach here')
    } catch (e) {
      expect(e).toBe('bar')
    }
  })
})
