export const state = {
    counter: 0
}


export const Root = {
    counter: () => {
        return state.counter;
    },
    startTimer: () => {
        every("slow-loop", 5.0, async () => {
            state.counter += 1;
        });
        return "Timer started";
    },
}