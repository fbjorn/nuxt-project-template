<template>
  <div class="index-page">
    <div class="block">
      <app-title :size="1">Welcome to example application!</app-title>
      <div>
        There are some usage examples of libraries bundled in this template
      </div>
    </div>
    <div class="block">
      <app-title :size="3">Working with local state:</app-title>
      <div>Counter: {{ counter }}</div>
      <app-button name="Increase" @click="increaseCounter" />
    </div>
    <div class="block">
      <app-title :size="3">Forms validation</app-title>
      <div class="inputs">
        <form-input
          v-model="username"
          label="Username"
          name="username"
          rules="required"
        />
        <form-input
          v-model="age"
          label="User age"
          name="age"
          type="number"
          rules="required|min_value:18"
        />
      </div>
    </div>
    <div class="block">
      <app-title :size="3">Font awesome icons</app-title>
      <font-awesome-icon icon="user" />
      <font-awesome-icon :icon="['fas', 'heart']" />
      <font-awesome-icon :icon="['far', 'heart']" />
    </div>
    <div class="block">
      <app-title :size="3">Loading spinner</app-title>
      <loading-indicator />
    </div>
    <div class="block">
      <app-title :size="3">Page that requires authentication</app-title>
      <nuxt-link to="/private">Go to private page</nuxt-link>
    </div>
    <div class="block">
      <app-title :size="3">Working with async API & Vuex</app-title>
      <app-button name="Fetch pets" :async-on-click="fetchPets" />
      <div v-for="pet of pets" :key="pet.id">{{ pet.name }} : {{ pet.id }}</div>
    </div>
    <div class="block mb-6">
      <app-title :size="5">Happy development!</app-title>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AppButton from '~/components/AppButton.vue'
import PetsModule from '~/store/pets'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import AppTitle from '~/components/AppTitle.vue'
import FormInput from '~/components/FormInput.vue'

@Component({
  components: {
    FormInput,
    AppTitle,
    LoadingIndicator,
    AppButton,
  },
})
export default class IndexPage extends Vue {
  counter = 0
  username = 'Hey'
  age = '18'

  increaseCounter() {
    this.counter++
  }

  get petsModule() {
    return getModule(PetsModule, this.$store)
  }

  async fetchPets() {
    // this is a Vuex action, no need to call "this.$store.dispatch(..)"
    await this.petsModule.fetchPets()
  }

  get pets() {
    // accessing Vuex store
    return this.petsModule.pets
  }
}
</script>

<style lang="sass" scoped>
.index-page
  text-align: center

  .inputs
    width: 20rem
    margin: 0 auto

.divider
  border-bottom: 1px solid lightgrey
  width: 50%
  margin: 1rem auto
</style>
