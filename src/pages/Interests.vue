<template>
  <q-page class="q-pa-xl bg-grey-2">
    <!-- 頁面標題 -->
    <div class="text-h5 q-mb-lg">{{ t('interests.title') }}</div>

    <q-timeline>
      <q-timeline-entry
        v-for="(item, index) in interestItems"
        :key="item.year"
        :title="item.year"
        :subtitle="item.topic"
        :class="['fade-slide-item']"
        :style="{ animationDelay: `${Number(index) * 0.15}s` }"
      >
        <div v-if="item.description">
          {{ item.description }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'InterestPage' })

const i18n = useI18n()
const t = i18n.t.bind(i18n)
const tm = i18n.tm.bind(i18n)

// 動態讀取多語系資料
const interestItems = computed(() => tm('interests.items') ?? [])
</script>


<style scoped>
.fade-slide-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>