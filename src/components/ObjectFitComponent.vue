<template lang="html">
<svg :width="width" :height="height"
     :viewBox="`0 0 ${imgWidth} ${imgHeight}`"
     :preserveAspectRatio="`${align} ${meetOrSlice}`"
     :aria-labelledby="titleId" aria-role="img">
    <title :id="titleId" v-html="title"></title>
    <image :xlink:href="url" width="100%" height="100%"></image>
</svg>
</template>

<script>
export default {
  name: 'vue-object-fit',
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default () {
        return 'title_' + Math.random().toString(36).substr(2, 9)
      },
    },
    align: {
      type: String,
      default: 'xMidYMid',
    },
    meetOrSlice: {
      type: String,
      default: 'slice',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    imgWidth: {
      type: Number,
      default: '100%',
    },
    imgHeight: {
      type: Number,
      default: '100%',
    },
  },
}
</script>

<style>

</style>
