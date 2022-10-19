<template>
  <div class="app-header">
    <a class="app-header__logo" href="#">Logo</a>
    <nav>
      <router-link
          active-class="app-header__link-active"
          class="app-header__link"
          to="/"
          aria-label="home"
          exact
      >
        <span class="desktop-title">Home</span>
        <svg-icon
            class="mobile-icon"
            :color="$route.name === 'home' ? '#5fb72b' : 'white'"
            name="Home"
        />
      </router-link>
      <router-link
          active-class="app-header__link-active"
          class="app-header__link"
          to="/removed-users"
          aria-label="Removed Users"
          exact
      >
        <span class="desktop-title">Removed Users</span>
        <svg-icon
            :color="$route.name === 'removed-users' ? '#5fb72b' : 'white'"
            class="mobile-icon"
            name="Users"
        />
      </router-link>
    </nav>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  name: "AppHeader",
  components: {
    SvgIcon
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/main";
.app-header {
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  margin-bottom: 40px;
  background-color: $brown-color;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    @include respond-below(xs) {
      margin-left: auto;
    }
  }

  &__link {
    text-decoration: none;
    color: white;
    @include transition(all);
    &:not(&:last-child) {
      margin-right: 40px;
    }
    &-active {
      color: $main-color;
    }
    &:hover {
      color: $main-color;
    }
    .mobile-icon {
      display: none;
    }
    .desktop-title {
      display: block;
    }

    @include respond-below(xs) {
      font-size: 12px;
      .mobile-icon {
        display: block;
      }
      .desktop-title {
        display: none;
      }
    }
  }
  &__logo {
    margin-right: 50px;
    font-size: 40px;
    font-weight: bold;
    color: $main-color;

    @include respond-below(xs) {
      font-size: 25px;
    }
  }
}
</style>
