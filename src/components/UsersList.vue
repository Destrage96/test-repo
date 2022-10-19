<template>
  <div class="inner-container">
    <h1 class="title-main">Пользователи <span v-if="usersType === 'removedUsers'">(удаленные)</span></h1>
    <ul class="users-list">
      <li v-for="user in usersList"
          class="users-list__item"
          :key="user.id">
        <span class="user-name">{{user.name}}</span>
        <RestoreButton @restore="restoreUser(user)" v-if="usersType === 'removedUsers'"/>
        <DeleteButton @on-delete="deleteUser(user)" v-else/>
      </li>
    </ul>
  </div>
</template>

<script>
import RestoreButton from "./buttons/RestoreButton";
import DeleteButton from "./buttons/DeleteButton";
export default {
  name: 'UsersList',
  components: {
    RestoreButton,
    DeleteButton
  },
  props: {
    usersType: {
      type: String,
      default: 'users'
    },
    usersList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    restoreUser(user) {
      this.$store.dispatch('restoreUser', user)
    },
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/main";
.title-main {
  margin-bottom: 20px;
  color: $main-color;
}
.users-list {
  &__item {
    text-align: left;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(&:last-child) {
      margin-bottom: 15px;
    }

    @include respond-below(xs) {
      max-width: 100%;
    }
  }
  .user-name {
    margin-right: 20px;
    color: $brown-text;
    width: fit-content;
  }
}
</style>
