<template>
  <div>
    <UsersList :usersType="'users'"
                :usersList="users"/>
  </div>
</template>

<script>
import UsersList from "../components/UsersList";
export default {
  name: "HomeView",
  components: {
    UsersList
  },

  computed: {
    users() {
      return this.$store.getters['getUsersList']
    },
  }
}
</script>

<style scoped>

</style>
