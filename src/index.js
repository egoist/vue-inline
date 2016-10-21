const makeComponent = (data = {}) => ({
  name: 'inline',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render: (h, ctx) => {
    const value = data[ctx.props.name]
    if (typeof value === 'string') {
      return h('span', {...ctx.data, domProps: {innerHTML: value}})
    }
    return h('span', ctx.data, value)
  }
})

export default (Vue, {data}) => Vue.component('inline', makeComponent(data))

export {makeComponent}
