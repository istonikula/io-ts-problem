# Steps to reproduce
1. in `packages/module-b`: `yarn build:2.0.0`
2. in `packages/module-a`: `yarn build:2.0.1`
3. compilation fails with
  ```
  index.ts:7:14 - error TS2345: Argument of type 'UnionC<[LiteralC<"foo">, LiteralC<"bar">]>' is not assignable to parameter of type 'Mixed'.
    Types of property 'pipe' are incompatible.
      Type '<B, IB, A extends IB, OB extends A>(this: Type<A, "foo" | "bar", unknown>, ab: Type<B, OB, IB>, name?: string | undefined) => Type<B, "foo" | "bar", unknown>' is not assignable to type '<B, IB, A extends IB, OB extends A>(this: Type<A, any, unknown>, ab: Type<B, OB, IB>, name?: string | undefined) => Type<B, any, unknown>'.
        The 'this' types of each signature are incompatible.
          Type 'Type<A, any, unknown>' is not assignable to type 'Type<IB, "foo" | "bar", unknown>'.
            Types of property 'is' are incompatible.
              Type 'Is<A>' is not assignable to type 'Is<IB>'.
                Type predicate 'u is A' is not assignable to 'u is IB'.
                  Type 'A' is not assignable to type 'IB'.
                    'A' is assignable to the constraint of type 'IB', but 'IB' could be instantiated with a different subtype of constraint '{}'.
                      Type 'IB' is not assignable to type 'IB'. Two different types with this name exist, but they are unrelated.
                        'IB' is assignable to the constraint of type 'IB', but 'IB' could be instantiated with a different subtype of constraint '{}'.

  7   b: t.array(FooBar)
  ```

