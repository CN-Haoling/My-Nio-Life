import { ref, reactive, nextTick } from 'vue'

export const useLogic = () => {
  const button = ref<Element>()

  const state = reactive({
    isLoading: false,
    isClicked: false
  })

  const handleClick = () => {
    if (state.isLoading) {
      return false
    }
    state.isClicked = true
    state.isLoading = true
    setTimeout(() => {
      state.isLoading = false
    }, 1000)
  }

  const init = () => {
    nextTick(()=>{
        button.value.style = 'background: #00bebe;'
    })
  }

  return {
    button,
    state,
    init,
    handleClick,
  }
}
