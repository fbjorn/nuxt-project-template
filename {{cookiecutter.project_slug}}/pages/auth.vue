<template>
  <div class="has-text-centered">
    <div>Please log in</div>
    <app-button name="Log in" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import AppButton from '~/components/AppButton.vue'
@Component({
  components: { AppButton },
})
export default class AuthPage extends Vue {}
</script>
