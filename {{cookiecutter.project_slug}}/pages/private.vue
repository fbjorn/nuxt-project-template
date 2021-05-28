<template>
  <div>
    <div>This page requires authentication by the middleware</div>
    <div>If you're not logged in, you'll be prompted to authenticate</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({
  middleware: 'authenticated',
})
export default class PrivatePage extends Vue {}
</script>
