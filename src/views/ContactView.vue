<script setup lang="ts">

import CIcon from "@/components/icons/CIcon.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <section>
          <div>
            <h2 class="section-title">Get in Touch</h2>
            <p class="section-description">We would love to hear from you! Contact us for any inquiries or to book your stay.</p>
            <div class="contact-info">
              <div class="contact-item">
                <i>
                  <CIcon name="MdiCellphoneCheck" />
                </i>
                <span class="contact-label">Phone:</span>
                <span class="contact-value">+1 123 456 7890</span>
              </div>
              <div class="contact-item">
                <i>
                  <CIcon name="MdiWhatsapp" />
                </i>
                <span class="contact-label">WhatsApp:</span>
                <span class="contact-value">+1 987 654 3210</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.section-title {
  color: #2196F3;
  font-size: 28px;
  margin-top: 0;
}

.section-description {
  font-size: 16px;
  color: #666;
}

.contact-info {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.contact-item i {
  font-size: 30px;
  margin-right: 10px;
  color: #2196F3;
}

.contact-label {
  font-weight: bold;
  margin-right: 5px;
}

.contact-value {
  font-size: 16px;
}
</style>
