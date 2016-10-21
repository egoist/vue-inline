const makeComponent = (data = {}) => ({
  name: 'inline',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render: (h, ctx) => h('span', ctx.data, data[ctx.props.name])
})

export default (Vue, {data}) => Vue.component('inline', makeComponent(data))

export {makeComponent}
