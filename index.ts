export let cheersName = "Membrane";
export let counter = 0;

// export const state = {
//     cheersName: "Membrane"
// }

// Uncomment me to get stateful super powers
// export const reset = ({ previous }) => {
//     if (previous.counter) {
//         counter = previous.counter;
//     }
// }

export const Root = {
    greet: () => {
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
        every("slow-loop", 5.0, async () => {
            counter += 1;
        });
        return "Timer started";
    },
}