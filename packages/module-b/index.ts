import * as t from 'io-ts'

export const FooBar = t.union([
  t.literal('foo'),
  t.literal('bar')
])
export type FooBar = t.TypeOf<typeof FooBar>