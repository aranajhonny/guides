export const state = {
  name: "World"
}

export const Root = {
  greet: () => `Hello ${state.name}! Cheers!`,

  setName: ({ args: { name } }) => {
    state.name = name;
  }
}
