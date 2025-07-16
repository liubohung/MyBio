<template>
  <q-page class="q-pa-xl bg-white">
    <div class="text-h5 q-mb-md">{{ t('about.title') }}</div>
    <div class="text-body1 text-grey-8">
      {{ t('about.content') }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'AboutPage' })

const { t } = useI18n()
</script>
