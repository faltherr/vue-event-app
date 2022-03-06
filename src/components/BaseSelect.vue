<template>
  <div>
    <label> {{ label }} </label>
    <select
      v-bind="$attrs"
      @change="updateValue"
      :value="value"
      v-on="$listeners"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option === value"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number],
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('changeOption', event.target.value)
    },
  },
}
</script>

<style>
</style>