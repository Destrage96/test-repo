<template>
  <button :disabled="disableButton"
          class="text-button"
          @click="onDelete">
    <svg-icon
        name="Trash"
    />
    <span>Удалить</span>
  </button>
</template>

<script>
import SvgIcon from "../SvgIcon";
export default {
  name: "DeleteButton",
  components: {
    SvgIcon
  },
  props: {
    disableButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onDelete() {
      this.$emit('on-delete')
    }
  }
}
</script>
