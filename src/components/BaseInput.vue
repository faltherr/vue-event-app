<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- The v-model in the consuming component listen to our emitted event and pass the value prop into this base component-->
    <!-- :value binds to our value prop provided by the form which consumes this component-->
    <input
      v-bind="$attrs"
      :value="value"
      type="text"
      placeholder="Add an event title"
      @input="updateValue"
      v-on="listeners"
    />
  </div>
</template>
    
<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
  mixins: [formFieldMixin],
  // inheritAttrs: false,
  // props: {
  //   label: {
  //     type: String,
  //     default: '',
  //   },
  //   value: [String, Number],
  // },
  // methods: {
  //   updateValue(event) {
  //     this.$emit('input', event.target.value)
  //   },
  // },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>
