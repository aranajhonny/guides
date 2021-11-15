export const Root = {
  sum: ({ args }) => {
    return {
      a: args.a,
      b: args.b,
      result: args.a + args.b
    };
  }
}
