<template>
  <button :disabled="disableButton"
          class="text-button"
          @click="onRestore">
    <svg-icon
        name="Return"
    />
    <span>Восстановить</span>
  </button>
</template>

<script>
import SvgIcon from "../SvgIcon";
export default {
  name: "RestoreButton",
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
    onRestore() {
      this.$emit('restore')
    }
  }
}
</script>
