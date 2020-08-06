<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to the Home Page',
    };
  },
};
</script>
