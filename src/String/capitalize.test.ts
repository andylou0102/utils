import { describe, expect, it } from 'vitest'
import { capitalize } from './capitalize'

describe('capitalize', () => {
  it('should uppercase the first letter of a string', () => {
    expect(capitalize('foo')).toBe('Foo')
  })

  it('should lowercase the rest of the string', () => {
    expect(capitalize('FOO')).toBe('Foo')
  })
})
