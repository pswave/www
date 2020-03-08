<template>
  <div>
    <Navbar />
    <div class="body-section">
    <Body />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Body from '~/components/Body.vue';
export default {
  components: {
    Navbar,
    Body,
  }
}
</script>


<style scoped>  
.body-section {
  height: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>