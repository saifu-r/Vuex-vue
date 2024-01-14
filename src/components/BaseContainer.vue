<template>
    <div>
        <h3>{{ title }}</h3>
        <h4>{{ counter }}</h4>
        <button @click="addOne">Add 1</button>
        <button @click="addEleven">Add 11</button>      
    </div> 
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {useStore} from 'vuex'
import {mapGetters} from 'vuex' // we can't use mapGetters in composition api

export default defineComponent({
    props:{
        title:{
            type: String,
            required: false
        }
    },
  setup() {
    const store= useStore()

    const counter= computed(()=> store.state.counter)
    


    const addOne= ()=>{
        // store.commit('incrementCounter')
        store.dispatch('incrementCounter')
    }

    const addEleven= ()=>{
        // store.commit('increaseCounter', {value: 10})

        store.dispatch({
            type: 'increaseCounter',
            value: 11
        })
    }
    // store.watch(()=>store.getters.normalizedCounter, (newValue)=>{
    //     counter.value= newValue
    // })

    return {counter, addOne, addEleven}
  },
});
</script>

<style scoped>

</style>

