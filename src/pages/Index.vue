<template>
  <Layout>
    <Home />
    <Profile />
  </Layout>
</template>

<script>
import Home from "~/components/Home.vue";
import Profile from "~/components/Profile.vue";
export default {
  metaInfo: {
    title: "Solomon Eseme"
  },
  components: {
    Home,
    Profile
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
