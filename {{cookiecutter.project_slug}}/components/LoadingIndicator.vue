<template>
  <div class="loading-indicator">
    <pulse-loader loading color="#FF0125" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

@Component({ components: { PulseLoader } })
export default class LoadingIndicator extends Vue {}
</script>

<style lang="sass" scoped>
.loading-indicator
  display: flex
  justify-content: center
</style>
