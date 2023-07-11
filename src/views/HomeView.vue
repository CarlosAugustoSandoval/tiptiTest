<script setup lang="ts">
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import HotelsList from "@/modules/hotels/components/HotelsList.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <WelcomeComponent />
      </div>
      <div class="col-12">
        <HotelsList />
      </div>
    </div>
  </div>
</template>
