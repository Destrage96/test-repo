<template>
  <div>
    <UsersList :usersType="'removedUsers'"
               :usersList="usersRemoved"/>
  </div>
</template>

<script>
import UsersList from "../components/UsersList";
export default {
  name: "RemovedUsers",
  components: {
    UsersList
  },

  computed: {
    usersRemoved() {
      return this.$store.getters['getRemoveUsersList']
    }
  }
}
</script>

<style scoped>

</style>
