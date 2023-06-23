export default {
  name: 'SelectComponent',

  props: ['modelValue', 'getPageNumber', 'itemsPerPage'],

  emits: ['update:modelValue'],

  template: `
    <select
      class="form-select"
      v-model="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        :value="n"
        v-for="n in getPageNumber"
      >
        Episode {{ (n * itemsPerPage) - itemsPerPage + 1 }} ~ Episode {{ n * itemsPerPage }}
      </option>
    </select>
  `,
};
