<template>
  <q-page class="q-pa-xl bg-grey-1">
    <div class="text-h5 q-mb-lg text-dark">{{ t('projects.title') }}</div>
    <q-list>
      <q-item
        v-for="(project, index) in projectList"
        :key="index"
        clickable
        tag="a"
        :href="project.url"
        target="_blank"
        class="project-item q-pa-md"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <!-- Icon -->
        <q-item-section avatar>
          <q-icon :name="getPlatformIcon(project.url)" size="md" class="text-grey-6" />
        </q-item-section>

        <!-- 標題與描述 -->
        <q-item-section>
          <q-item-label class="text-subtitle1 text-dark">
            {{ project.title }}
          </q-item-label>
          <q-item-label class="text-body2 text-grey-6">
            {{ project.description }}
          </q-item-label>
        </q-item-section>

        <!-- 開啟圖示 -->
        <q-item-section side>
          <q-icon name="open_in_new" size="xs" class="text-grey-5" />
        </q-item-section>
      </q-item>
    </q-list>
    <div class="update-footer text-center q-mt-xl">
      <q-icon name="mdi-refresh" size="sm" class="q-mr-xs text-primary" />
      <span class="text-grey-7">持續更新中</span>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

defineOptions({ name: 'ProjectsPage' })

const i18n = useI18n()
const t = i18n.t.bind(i18n)
const tm = i18n.tm.bind(i18n)

type ProjectEntry = {
  title: string
  description: string
  url?: string
}

const projectList = computed(() => {
  const rawProjects = tm('projects.projectList')
  return Array.isArray(rawProjects) ? rawProjects as ProjectEntry[] : []
})

const getPlatformIcon = (url?: string) => {
  if (!url) return 'folder_open'
  if (url.includes('kaggle')) return 'mdi-alpha-k-box'
  if (url.includes('github')) return 'mdi-github'
  if (url.includes('tableau')) return 'auto_graph'
  return 'folder_open'
}
</script>

<style scoped>
.project-item {
  border-radius: 10px;
  background-color: white;
  margin-bottom: 8px;
  transform: translateY(10px);
  opacity: 0;
  animation: fadeInUp 0.4s ease forwards;
}

.project-item:hover {
  background-color: #f9f9f9;
  transform: translateY(-1px);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
