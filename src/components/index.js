const install = (Vue) => {
  Vue.directive('occupy', {
    bind (el, binding, vnode) {
      let _placeHolder = '<div style="'
      const _defaultConfig = {
        width: '100%',
        height: '100%',
        background: '#eee'
      }
      const _configObj = { ..._defaultConfig, ...binding.value.config, transition: 'all .3s' }
      Object.keys(_configObj).forEach((style) => {
        _placeHolder += `${style}:${_configObj[style]};`
      })
      _placeHolder += '"></div>'
      el.innerHTML = _placeHolder
    },
    update (el, binding) {
      el.children[0].style.opacity = 0
      setTimeout(() => {
        el.innerHTML = binding.value.data
      }, 300)
    }
  })
}

export default install
