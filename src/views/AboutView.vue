<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button ref="button" @click="handleClick"> my logic </button>
  </div>
</template>


<script lang="ts">
import { useLogic } from '@/composition/useLogic.ts'
import { defineComponent, watch } from 'vue'


export default defineComponent({
  name: 'demoPage',
  setup() {
    const {   button,
    state,
    init,
    handleClick, } = useLogic()

    init()

    return {  button,
    state,
    init,
    handleClick,
    }

  }
})
</script>
