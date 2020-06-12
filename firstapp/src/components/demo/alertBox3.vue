<template>
    <div>
      <div v-bind:key="item" v-for="item in this.list" class="list-item">
        {{item.name}}
        <slot :data="item">
          xxxx
        </slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'alertBox3',
  data () {
    return {
    }
  },
  props: [
    'list'
  ]
}
</script>

<style scoped>

</style>
