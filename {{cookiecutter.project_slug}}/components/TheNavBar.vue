<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item navbar-logo" href="/">
        <img src="/img/logos/logo.png" />
      </a>
      <div class="navbar-title navbar-item">
        <router-link to="/">Demo Application</router-link>
      </div>
      <div class="navbar-burger" data-target="navBar" @click="onMenuClick">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navBar" class="navbar-menu" :class="{ 'is-active': isExpanded }">
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import AppButton from '~/components/AppButton.vue'

@Component({
  components: { AppButton },
})
export default class TheNavBar extends Vue {
  isExpanded = false

  onMenuClick(): void {
    this.isExpanded = !this.isExpanded
  }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"

$navbar-height: 4rem

.navbar
  height: $navbar-height
  margin-bottom: 10px
  //border-radius: 10px

  .navbar-logo
    img
      width: auto
      height: auto
      max-height: $navbar-height - 0.75rem

  .navbar-title a
    font-size: 1.5rem
    font-weight: bold
    color: $theme-grey

  .link
    color: white
    +mobile
      color: black
    &:hover
      color: lightgrey
</style>
