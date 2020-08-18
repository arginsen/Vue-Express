<template>
  <div id="app">
    <a-menu
      class="menu"
      mode="horizontal">
      <a-menu-item key="1">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/cart">Cart</router-link>
      </a-menu-item>
      <a-sub-menu key="3">
        <span slot="title">Admin</span>
        <a-menu-item key="3a">
          <router-link to="/admin">查看商品</router-link>
        </a-menu-item>
        <a-menu-item key="3b">
          <router-link to="/admin/new">添加商品</router-link>
        </a-menu-item>
        <a-menu-item key="3c">
          <router-link to="/admin/manufacturers">查看生产商</router-link>
        </a-menu-item>
        <a-menu-item key="3d">
          <router-link to="/admin/manufacturers/new">添加生产商</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* max-width: 1140px; */
  /* margin: 0 auto; */
}
</style>

<script>
export default {
  name: 'App',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
