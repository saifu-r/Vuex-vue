import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    isLoggedIn: false
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    increaseCounter(state, payloads) {
      state.counter = state.counter + payloads.value;
    },
    logIn(state, payload){
        state.isLoggedIn= payload.value
    },
    logOut(state, payload){
        state.isLoggedIn= payload.value
    }
   
  },
  actions: {
    incrementCounter(context) {
        setTimeout(function(){
            context.commit('incrementCounter')
        }, 2000)
    },
    increaseCounter(context, payload){
        context.commit('increaseCounter', payload)
    },

    logIn(context){
        context.commit('logIn',{value: true})
    },
    logOut(context){
        context.commit('logOut', {value: false})
    }

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
    isloggedInFunction(state){
        return state.isLoggedIn
    }
  },
  
});

export default store;
