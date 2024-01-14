import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    increaseCounter(state, payloads) {
      state.counter = state.counter + payloads.value;
    },
  },
  getters: {
    finalCounterFunction(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounterFunction;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
  actions: {
    incrementCounter(context) {
        setTimeout(function(){
            context.commit('incrementCounter')
        }, 2000)
    },
    increaseCounter(context, payload){
        context.commit('increaseCounter', payload)

    }

  },
});

export default store;
