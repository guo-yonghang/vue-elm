const debounce = {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      throw new TypeError('v-debounce binding must be a function')
    }
    let timer = null
    el.__handleClick__ = function () {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleClick__)
  },
}

export default debounce
