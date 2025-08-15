<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="!isHome" elevated class="bg-primary text-white">
      <q-toolbar class="q-px-md">

        <!-- Logo / 標題 -->
        <q-toolbar-title
          class="text-weight-bold text-no-wrap ellipsis"
          style="min-width:0; max-width:60vw"
        >
          <q-btn flat dense :label="t('nav.title')" to="/" class="text-h6" />
        </q-toolbar-title>

        <q-space />

        <!-- >= sm 顯示水平選單 -->
        <div class="q-gutter-sm row items-center gt-xs">
          <q-btn flat dense :label="t('nav.about')"     to="/about"     class="nav-btn" />
          <q-btn flat dense :label="t('nav.interests')" to="/interests" class="nav-btn" />
          <q-btn flat dense :label="t('nav.projects')"  to="/projects"  class="nav-btn" />
          <q-btn flat round dense icon="translate" @click="toggleLanguage" class="q-ml-sm" />
        </div>

        <!-- xs 顯示漢堡選單 -->
        <div class="lt-sm">
          <q-btn flat round dense icon="menu">
            <q-menu auto-close anchor="bottom right" self="top right">
              <q-list style="min-width: 180px">
                <q-item to="/about" clickable v-ripple><q-item-section>{{ t('nav.about') }}</q-item-section></q-item>
                <q-item to="/interests" clickable v-ripple><q-item-section>{{ t('nav.interests') }}</q-item-section></q-item>
                <q-item to="/projects" clickable v-ripple><q-item-section>{{ t('nav.projects') }}</q-item-section></q-item>
                <q-separator />
                <q-item clickable v-ripple @click="toggleLanguage">
                  <q-item-section>{{ locale === 'en' ? '切換為中文' : 'Switch to English' }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
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

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'zh-TW' : 'en'
}
</script>

<style scoped>
/* 基本按鈕樣式 */
.q-btn {
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}
.q-btn:hover { transform: translateY(-2px); color: #ffffff; }

/* 文字按鈕尺寸（大螢幕） */
.nav-btn { font-size: 1.05rem; }

/* 小螢幕優化：縮小字體、增加可用寬度，避免重疊 */
@media (max-width: 600px) {
  .text-h6 { font-size: 1rem !important; }
  .nav-btn { font-size: 0.95rem; }
}

/* 避免標題撐爆 toolbar */
.q-toolbar__title { overflow: hidden; }
</style>
