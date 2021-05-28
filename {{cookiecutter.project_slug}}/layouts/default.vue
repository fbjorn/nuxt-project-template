<template>
  <div>
    <div class="background-pattern" />
    <the-nav-bar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import TheNavBar from '~/components/TheNavBar.vue'

@Component({
  components: { TheNavBar },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="sass">
@import "assets/styles/globals"
@import "~bulma/bulma"

body
  font-family: Rubik, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.background-pattern
  position: fixed
  width: 100vw
  height: 100vh
  z-index: -1000

  background-color: #D4EAF1
  opacity: 0.2
  background-image:  radial-gradient(#444cf7 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(#444cf7 0.8500000000000001px, #D4EAF1 0.8500000000000001px)
  background-size: 34px 34px
  background-position: 0 0,17px 17px
</style>
