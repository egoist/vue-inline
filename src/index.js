import assign from 'object-assign'

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
      return h('span', assign({domProps: {innerHTML: value}}, ctx.data))
    }
    return h('span', ctx.data, value)
  }
})

export default (Vue, {data}) => Vue.component('inline', makeComponent(data))

export {makeComponent}
