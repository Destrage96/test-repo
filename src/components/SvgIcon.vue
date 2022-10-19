<template>
  <component :is="`Icon${name}`"
             :width="width"
             :height="height"
             :color="color"/>
</template>

<script >
import { IconsList } from './icons';
export default {
  name: 'SvgIcon',
  components: {
    ...IconsList
  },
  props: {
    name: String,
    color: String,
    width: Number,
    height: Number
  }
}
</script>
