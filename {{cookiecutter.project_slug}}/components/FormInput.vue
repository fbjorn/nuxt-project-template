<template>
  <div class="field">
    <validation-provider v-slot="{ errors }" :name="label" :rules="rules">
      <label class="label" :for="name">{{ label }}</label>
      <div class="control">
        <input
          :id="name"
          v-model="inputValue"
          class="input"
          :type="type"
          placeholder="Text input"
        />
      </div>
      <p class="help is-danger">{{ errors[0] }}</p>
    </validation-provider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, VModel } from 'nuxt-property-decorator'

@Component
export default class FormInput extends Vue {
  @Prop({ required: true, type: String })
  label!: string

  @Prop({ required: true, type: String })
  name!: string

  @Prop({ default: 'text', type: String })
  type!: string

  @VModel({ type: String })
  inputValue!: string

  @Prop({ type: String })
  rules!: string
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"
.label
  text-align: left
</style>
