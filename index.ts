
let cheersName = "Membrane";
let counter = 0;

export const Root = {
    helloWorld: () => {
        return `Hello World! cheers from ${cheersName} :D`;
    },
    setCheersName: ({ args: { name } }: { args: { name: string }}) => {
        cheersName = name;
    },
    sum: ({ args }: { args: { a: number, b: number } }) => {
        return {
            "a": args.a,
            "b": args.b,
            "result": args.a + args.b
        };
    },
    counter: () => {
        return counter;
    },
    startSumTimer: () => {
        every("slow-loop", 30.0, async () => {
            counter += 1;
        });
        return "Timer started";
    },
}