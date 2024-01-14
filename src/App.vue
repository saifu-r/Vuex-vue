<template>
  <div v-if="logStatus">
    <base-container title="Vuex"></base-container>
  </div>
  <div>
    <user-authentication></user-authentication>

  </div>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import UserAuthentication from './components/UserAuthentication.vue';


export default defineComponent({
  name: 'App',
  components: {BaseContainer, UserAuthentication},
  setup(){
    const store= useStore()
    const logStatus= computed(()=> store.state.isLoggedIn)

    return {logStatus}
  }
});
</script>

<style>

</style>
