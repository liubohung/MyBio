!-- ProjectsPage.vue -->
<template>
  <q-page class="q-pa-xl bg-white">
    <div class="text-h5 q-mb-lg">{{ t('projects.title') }}</div>
    <div class="q-gutter-md row">
      <q-card class="my-card col-xs-12 col-sm-6 col-md-4">
        <q-img src="/assets/project1.jpg" :ratio="16/9" />
        <q-card-section>
          <div class="text-h6">{{ t('projects.project1.title') }}</div>
          <div class="text-caption text-grey-7">{{ t('projects.project1.description') }}</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card col-xs-12 col-sm-6 col-md-4">
        <q-img src="/assets/project2.jpg" :ratio="16/9" />
        <q-card-section>
          <div class="text-h6">{{ t('projects.project2.title') }}</div>
          <div class="text-caption text-grey-7">{{ t('projects.project2.description') }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ProjectsPage' })

const { t } = useI18n()
</script>
