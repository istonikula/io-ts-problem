import * as t from 'io-ts'

import { FooBar } from '@istonikula/module-b/lib'

export const Qux = t.type({
  a: t.string,
  b: t.array(FooBar)
})
