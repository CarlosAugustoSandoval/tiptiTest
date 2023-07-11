<script setup lang="ts">

</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-info">
        <p>&copy; 2023 Miami Hotel's. All rights reserved.</p>
      </div>
      <nav class="footer-menu"></nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  background-color: #f0f0f0;
  padding: 16px;
  color: black;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-info {
      font-weight: bold;
      p {
        margin: 0;
      }
    }

    .footer-menu {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
