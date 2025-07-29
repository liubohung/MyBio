<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="!isHome" elevated class="bg-primary text-white">
      <q-toolbar class="q-px-md">

        <!-- Logo / 標題 -->
        <q-toolbar-title class="text-weight-bold">
          <q-btn flat dense :label="t('nav.title')" to="/" class="text-h6 "/>
        </q-toolbar-title>

        <!-- 導覽連結 -->
        <div class="q-gutter-sm row items-center">
          <q-btn flat dense :label="t('nav.about')" to="/about" class="text-h6" />
          <q-btn flat dense :label="t('nav.interests')" to="/interests" class="text-h6" />
          <q-btn flat dense :label="t('nav.projects')" to="/projects" class="text-h6"/>

          <!-- 語言切換 icon 按鈕 + tooltip -->
          <!-- <q-tooltip anchor="bottom middle" self="top middle" transition-show="scale" transition-hide="fade">
            {{ currentLocale === 'en' ? '切換為中文' : 'Switch to English' }}
          </q-tooltip> -->

          <q-btn
            flat
            round
            dense
            icon="translate"
            @click="toggleLanguage"
            class="q-ml-sm"
          />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const { t, locale } = useI18n()
// const currentLocale = computed(() => locale.value)

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'zh-TW' : 'en'
}
</script>


<style lang="css" scoped>
.q-btn {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.2s ease-in-out;
}
.q-btn:hover {
  transform: translateY(-2px);
  color: #ffffff;
}
</style>