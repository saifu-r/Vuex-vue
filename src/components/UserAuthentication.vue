<template>
    <div>
        <button @click="login" v-if="!logStatus">LogIn</button>
        <button @click="logout" v-else>LogOut</button>
    </div>
    
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const store= useStore()
    const logStatus= computed(()=> store.state.isLoggedIn)
    console.log("The logStatus is "+ logStatus.value); 
    

    const login= ()=>{
        store.dispatch({
            type: 'logIn',
            value: false
        })
        console.log(logStatus.value)
    }
    const logout= ()=>{
        store.dispatch({
            type: 'logOut',
            value: true
        })
    }

    return {login, logout, logStatus}
  },
});
</script>

<style scoped>

</style>

