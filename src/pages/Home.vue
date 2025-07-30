<template>
  <q-page class="bg-grey-1">
    <div class="flex flex-center q-pa-xl">
      <div class="column items-center text-center animate__animated animate__fadeIn" style="max-width: 600px;">
        <q-img
          
          src="assets/avatar.jpg" 
          style="width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border: 4px solid #fff; box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);"
          class="q-mb-md coin-spin"
        />

        <div class="text-h3 text-primary text-weight-bold q-mb-sm animate__animated animate__fadeInUp">
          {{ t('home.greeting') }}
        </div>

        <div class="text-subtitle1 text-grey-7 q-mb-xl animate__animated animate__fadeInUp animate__delay-1s">
          {{ t('home.description') }}
        </div>

        <q-btn
          :label="t('home.cta')"
          color="primary"
          to="/about"
          class="q-mt-md animate__animated animate__zoomIn animate__delay-2s"
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import 'animate.css'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>


<style scoped>
.coin-spin {
  animation: coinRotate  1.5s linear 1.5 forwards;
  transform-style: preserve-3d;
}

@keyframes coinRotate {
  0% {
    transform: rotateY(0deg);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: rotateY(180deg);
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);
  }
  100% {
    transform: rotateY(360deg);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
