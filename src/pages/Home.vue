<template>
  <q-page class="bg-grey-1">
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-px-md">
        <q-toolbar-title class="text-weight-bold">{{ t('nav.title') }}</q-toolbar-title>
        <div class="q-gutter-sm row items-center">
          <q-btn flat dense :label="t('nav.about')" to="/about" />
          <q-btn flat dense :label="t('nav.experience')" to="/experience" />
          <q-btn flat dense :label="t('nav.projects')" to="/projects" />
          <q-btn flat dense :label="t('nav.contact')" to="/contact" />
        </div>
      </q-toolbar>
    </q-header> -->

    <div class="flex flex-center q-pa-xl">
      <div class="column items-center text-center animate__animated animate__fadeIn" style="max-width: 600px;">
        <q-img
          src="../../public/assets/avatar.jpg"
          style="width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border: 4px solid #fff; box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);"
          class="q-mb-md"
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
          to="/projects"
          class="q-mt-md animate__animated animate__zoomIn animate__delay-2s"
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import 'animate.css'

defineOptions({ name: 'HomePage' })

const { t } = useI18n()
</script>
