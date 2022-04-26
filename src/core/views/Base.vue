<template>
  <AdminBase v-if="isAdmin"></AdminBase>
  <CustomerBase v-else></CustomerBase>
</template>

<script>
import AdminBase from '@/components/AdminBase';
import CustomerBase from '@/components/CustomerBase';
import Constants from '@/plugins/constants';

export default {
  components: {
    CustomerBase,
    AdminBase
  },
  computed: {
    isAdmin() {
      return Constants.APP == 'admin'
    }
  }
}
</script>

<style lang="sass" scoped>
  .app-bar-border
    border-bottom: 1px solid #d3d3d3 !important

</style>
