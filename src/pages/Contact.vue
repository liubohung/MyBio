<!-- ContactPage.vue -->
<template>
  <q-page class="q-pa-xl bg-grey-1">
    <div class="text-h5 q-mb-md">{{ t('contact.title') }}</div>
    <q-form class="q-gutter-md" @submit.prevent="send">
      <q-input filled v-model="name" :label="t('contact.name')" />
      <q-input filled v-model="email" :label="t('contact.email')" type="email" />
      <q-input filled v-model="message" :label="t('contact.message')" type="textarea" />
      <q-btn :label="t('contact.send')" color="primary" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ContactPage' })

const { t } = useI18n()

const name = ref('')
const email = ref('')
const message = ref('')

function send() {
  alert(`${t('contact.thankYou')}, ${name.value} !`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
