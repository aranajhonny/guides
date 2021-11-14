export const Root = {
    sum: ({ args }: { args: { a: number, b: number } }) => {
        return {
            "a": args.a,
            "b": args.b,
            "result": args.a + args.b
        };
    }
}