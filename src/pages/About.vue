<template>
  <q-page class="q-pa-xl bg-grey-2 resume-page">
    <div class="row justify-center q-gutter-lg">
      
      <!-- 左側：個人資料區 -->
      <div class="col-12 col-md-4 col-lg-3">
        <q-card class="q-pa-md shadow-2 rounded-borders bg-white text-center about-sidecard">

          <!-- 大頭照 --> 
          <q-img src="assets/msGraduate.jpg" class="profile-img" /> 
          
          <!-- 姓名與職稱 --> 
          <div class="text-h5 text-primary q-mt-md"> {{ t('about.nameFirst') }} </div> 
          <div class="text-subtitle1 text-grey q-mb-md"> {{ t('about.nameSecond') }} </div> <q-separator class="q-my-sm" />

          <!-- 聯絡資訊 -->
          <q-list dense class="text-left">
            <q-item tag="a" clickable href="mailto:liubohung@gmail.com" rel="noopener noreferrer">
              <q-item-section avatar><q-icon name="email" /></q-item-section>
              <q-item-section>
                <q-item-label>Email</q-item-label>
                <q-item-label caption class="wrap">liubohung@gmail.com</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="a" clickable href="https://liubohung.github.io" target="_blank" rel="noopener noreferrer">
              <q-item-section avatar><q-icon name="language" /></q-item-section>
              <q-item-section>
                <q-item-label>Website</q-item-label>
                <q-item-label caption class="wrap">{{ t('about.website') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="a" clickable href="https://github.com/liubohung" target="_blank" rel="noopener noreferrer">
              <q-item-section avatar><q-icon name="mdi-github" /></q-item-section>
              <q-item-section>
                <q-item-label>GitHub</q-item-label>
                <q-item-label caption class="wrap">{{ t('about.github') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="a" clickable href="https://www.kaggle.com/pohungliu" target="_blank" rel="noopener noreferrer">
              <q-item-section avatar><q-icon name="mdi-alpha-k-box" /></q-item-section>
              <q-item-section>
                <q-item-label>Kaggle</q-item-label>
                <q-item-label caption class="wrap">{{ t('about.kaggle') }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-sm" />

          <!-- 語言 -->
          <q-list dense class="text-left">
            <q-item v-for="(lang, i) in languageLevel" :key="i">
              <q-item-section avatar><q-icon name="g_translate" /></q-item-section>
              <q-item-section>
                <q-item-label>{{ lang.language }}</q-item-label>
                <q-item-label caption>{{ lang.level }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-sm" />

          <!-- 個人資料 -->
          <q-list dense class="text-left">
            <q-item>
              <q-item-section avatar><q-icon name="person" /></q-item-section>
              <q-item-section><q-item-label>{{ t('about.gender') }}</q-item-label></q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="cake" /></q-item-section>
              <q-item-section><q-item-label>{{ t('about.birth') }}</q-item-label></q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon name="place" /></q-item-section>
              <q-item-section><q-item-label class="wrap">{{ t('about.location') }}</q-item-label></q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- 右側：履歷內容 -->
      <div class="col-12 col-md-8">
        <!-- 專業摘要 -->
        <q-card class="q-pa-lg shadow-2 rounded-borders bg-white q-mb-lg">
          <div class="text-h6 text-primary q-mb-md">{{ t('about.summaryTitle') }}</div>
          <div class="text-body1 text-grey-8">
            {{ t('about.summary') }}
          </div>
        </q-card>

        <!-- 技能區 -->
        <q-card class="q-pa-lg shadow-2 rounded-borders bg-white q-mb-lg">
          <div class="text-h6 text-primary q-mb-md">{{ t('about.skillTitle') }}</div>
          <div
            v-for="(skill, index) in myskills"
            :key="index"
            class="q-mb-md"
          >
            <!-- 標題顏色對應 -->
            <div
              class="text-subtitle2 q-mb-sm"
              :class="`text-${skillColors[index % skillColors.length]}`"
            >
              {{ skill.jobName }}
            </div>

            <!-- 技能 Chips -->
            <div class="skill-chip-group">
              <q-chip
                v-for="(name, idx) in skill.skillName"
                :key="idx"
                outline
                :color="skillColors[index % skillColors.length]"
                :text-color="skillColors[index % skillColors.length]"
                dense
                class="q-mr-sm q-mb-sm"
              >
                {{ name }}
              </q-chip>
            </div>
          </div>
        </q-card>


        <!-- 經歷區 -->
        <q-card class="q-pa-lg shadow-2 rounded-borders bg-white">
          <div class="text-h6 text-primary q-mb-lg">{{ t('experience.title') }}</div>
          <q-timeline color="primary">
            <q-timeline-entry
              v-for="(item, index) in experienceItems"
              :key="index"
              :title="item.title"
              :subtitle="item.subtitle"
              :icon="item.icon"
            >
              <div class="text-body1 text-grey" v-if="item.description">
                {{ item.description }}
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'


defineOptions({ name: 'ResumePage' })

const i18n = useI18n()
const t = i18n.t.bind(i18n)
const tm = i18n.tm.bind(i18n)

interface Skill {
  jobName: string
  skillName: string[]
}
const myskills = computed<Skill[]>(() => tm('about.skills') ?? [])
const experienceItems = computed(() => (tm('experience.items') ?? []))
const languageLevel = computed(() => tm('about.languageLevel') ?? [])
// 設定不同技能類別的顏色
const skillColors = [
  'primary',
  'secondary',
  'teal',
  'deep-orange',
  'purple',
  'indigo'
]

</script>

<style scoped>
.resume-page {
  font-size: 1.05rem; /* 整體字體放大 */
}

.profile-img {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  display: block;
}

.contact-info, .personal-info {
  line-height: 1.8;
}

.skill-chip-group {
  display: flex;
  flex-wrap: wrap;
}
.wrap {
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
}

</style>
