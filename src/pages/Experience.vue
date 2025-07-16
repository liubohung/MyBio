<template>
  <q-page class="q-pa-xl bg-grey-2">
    <div class="text-h5 q-mb-lg">{{ t('experience.title') }}</div>
    <q-timeline>
      <q-timeline-entry
        v-for="key in itemKeys"
        :key="key"
        :title="t(`experience.${key}.title`)"
        :subtitle="t(`experience.${key}.subtitle`)"
      >
        <div v-if="t(`experience.${key}.description`)">
          {{ t(`experience.${key}.description`) }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ExperiencePage' })

const i18n = useI18n()
const t = i18n.t.bind(i18n)
const te = i18n.te.bind(i18n)

// 手動綁定 te，避免 ESLint 警告
const teSafe = (key: string) => te(key)

// 明確註記 itemKeys 為 string[]
const itemKeys: string[] = []
let i = 1
while (teSafe(`experience.item${i}.title`)) {
  itemKeys.push(`item${i}`)
  i++
}
</script>
