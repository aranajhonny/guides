export const state = { counter: 0 }

export const reset = () => {
  every("loop", 5.0, () => {
    state.counter += 1;
  });
}

export const Root = {
  counter: () => state.counter
}
