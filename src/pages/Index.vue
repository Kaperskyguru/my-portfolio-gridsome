<template>
  <Layout>
    <Home />
  </Layout>
</template>

<script>
import Home from "~/components/Home.vue";
export default {
  metaInfo: {
    title: "Solomon Eseme"
  },
  components: {
    Home
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
