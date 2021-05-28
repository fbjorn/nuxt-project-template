<template>
  <button
    class="button"
    :class="{ 'is-loading': loading | isLoading, 'is-primary': primary }"
    @click="click"
  >
    <span v-if="icon" class="icon">
      <img :src="icon" alt="button" />
    </span>
    <span>{{ name }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit, Prop } from 'nuxt-property-decorator'

@Component
export default class AppButton extends Vue {
  isLoading = false

  @Prop({ type: String })
  icon!: string

  @Prop({ type: String, required: true })
  name!: string

  @Prop({ type: Function })
  asyncOnClick!: () => boolean

  @Prop({ type: Boolean, default: false })
  primary!: boolean

  @Prop({ type: Boolean, default: false })
  loading!: boolean

  @Emit('click')
  async click(): Promise<void> {
    if (this.asyncOnClick) {
      this.isLoading = true
      await this.asyncOnClick()
      this.isLoading = false
    }
  }
}
</script>
