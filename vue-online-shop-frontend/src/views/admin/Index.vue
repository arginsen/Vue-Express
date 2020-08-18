<template>
  <div class="admin-index">
    <a-breadcrumb class="admin-index">
      <a-breadcrumb-item>
        Admin
      </a-breadcrumb-item>
      <a-breadcrumb-item>
      <router-link :to='this.$route.path'>{{this.$route.name}}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>

    <router-view></router-view>
  </div>
</template>

<style>
.admin-index {
  margin: 20px 10px;
}
</style>
