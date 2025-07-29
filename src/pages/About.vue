<template>
  <q-page class="q-pa-xl bg-grey-2 resume-page">
    <div class="row justify-center q-gutter-lg">
      
      <!-- 左側：個人資料區 -->
      <div class="col-12 col-md-3">
        <q-card class="q-pa-md shadow-2 rounded-borders bg-white text-center">
          <!-- 大頭照 -->
          <q-img
            src="/assets/msGraduate.jpg"
            class="profile-img"
          />
          
          <!-- 姓名與職稱 -->
          <div class="text-h5 text-primary q-mt-md">
            {{ t('about.nameFirst') }}
          </div>
          <div class="text-subtitle1 text-grey q-mb-md">
            {{ t('about.nameSecond') }}
          </div>
          <q-separator class="q-my-sm" />

          <!-- 聯絡資訊 -->
          <div class="text-body1 text-grey q-mt-md text-left contact-info">
  
          <!-- Email -->
          <div class="q-mb-sm row items-center no-wrap">
            <q-icon name="email" class="q-mr-sm" />
            <span class="q-mr-sm">Email:</span>
            <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" class="text-grey">
              <!-- {{ t('about.email') }} -->
              liubohung@gmail.com
            </a>
          </div>

          <!-- Website -->
          <div class="q-mb-sm row items-center no-wrap">
            <q-icon name="language" class="q-mr-sm" />
            <span class="q-mr-sm">Website:</span>
            <a href="https://liubohung.github.io" target="_blank" rel="noopener noreferrer" class="text-grey">
              {{ t('about.website') }}
            </a>
          </div>

          <!-- GitHub -->
          <div class="q-mb-sm row items-center no-wrap">
            <q-icon name="mdi-github" class="q-mr-sm" />
            <span class="q-mr-sm">GitHub:</span>
            <a href="https://github.com/liubohung" target="_blank" rel="noopener noreferrer" class="text-grey">
              {{ t('about.github') }}
            </a>
          </div>

          <!-- Kaggle -->
          <div class="q-mb-sm row items-center no-wrap">
            <q-icon name="mdi-alpha-k-box" class="q-mr-sm" />
            <span class="q-mr-sm">Kaggle:</span>
            <a href="https://www.kaggle.com/pohungliu" target="_blank" rel="noopener noreferrer" class="text-grey">
              {{ t('about.kaggle') }}
            </a>
          </div>
        </div>

          <!-- 個人資料 -->
          <q-separator class="q-my-sm" />
          <div class="text-body1 text-grey text-left personal-info">
            <div><q-icon name="person" class="q-mr-sm" />{{ t('about.gender') }}</div>
            <div><q-icon name="cake" class="q-mr-sm" />{{ t('about.birth') }}</div>
            <div><q-icon name="place" class="q-mr-sm" />{{ t('about.location') }}</div>
          </div>
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
</style>
