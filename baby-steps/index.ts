export const state = {
    name: "Membrane"
}

export const Root = {
    greet: () => {
        return `Hello World! cheers from ${state.name} :D`;
    },
    setName: ({ args: { name } }: { args: { name: string }}) => {
        state.name = name;
    }
}