// import { createI18n } from 'vue-i18n';
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      title: 'My Bio',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      greeting: "Hi, I'm Po-Hung Liu",
      description: 'An engineer, a researcher, and a thinker.',
      cta: 'Explore My Work',
    },
    about: {
      title: 'About Me',
      content:
        'I am a research-oriented individual with a strong interest in the application of data science and financial economics. My expertise lies in integrating programming and statistical methods to address both practical and theoretical problems. Over the years, I have been deeply engaged in areas such as asset pricing models, machine learning forecasting, and data visualization, with experience spanning multiple programming languages and platforms. In my work, I place a high value on logical structure and attention to detail. I take satisfaction in tackling complex challenges, which continually motivates me to improve and grow.I am analytical by nature, enjoy independent thinking, and strive to understand the essence of the problems I encounter. Beyond my professional interests, I enjoy reading philosophy and social science literature, which helps me reflect on personal development and the broader meaning of work. I believe that solid technical skills combined with thoughtful inquiry are key to producing meaningful and impactful results.',
    },
    experience: {
      title: 'Experience',
      item1: {
        title: 'Undergraduate',
        subtitle: 'Department of Computer Science and Engineering, Feng Chia University',
        description:
          'Developed foundational skills in data processing, algorithms, and model construction through a combined background in computer science and finance.',
      },
      item2: {
        title: 'Research Assistant in Educational Data Visualization',
        subtitle: 'Educational Institution Collaborative Project (2022 - 2023)',
        description:
          'Designed and implemented a data visualization platform for educational data, supporting the analysis of student performance and curriculum trends.',
      },
      item3: {
        title: 'Asset Pricing Research and Academic Writing',
        subtitle: 'Academic Research and Project Collaboration (2021 - Present)',
        description:
          'Engaged in the development of asset pricing models, empirical analysis in behavioral finance, and the investigation of financial market anomalies.',
      },
      item4: {
        title: 'Master’s Program',
        subtitle: 'Department of Finance, National Dong Hwa University',
        description: '',
      },
    },
    projects: {
      title: 'Projects',
      project1: {
        title: 'Portfolio Website',
        description: 'A personal site built with Vue and Quasar.',
      },
      project2: {
        title: 'Dashboard App',
        description: 'An admin dashboard with real-time data and charts.',
      },
    },
    contact: {
      title: 'Contact Me',
      name: 'Your Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      thankYou: 'Thank you',
    },
  },
  zh: {
    nav: {
      title: '我的簡介',
      about: '關於我',
      experience: '經歷',
      projects: '作品集',
      contact: '聯絡方式',
    },
    home: {
      greeting: '嗨，我是 劉伯洪',
      description: '一個工程師、研究者、喜愛思考的人',
      cta: '關於我是誰？',
    },
    about: {
      title: '關於我',
      content:
        '我是一位關注資料科學與財務經濟應用的研究型人才，擅長將程式設計與統計方法結合，解決實務與理論上的分析問題。過去在學術與實作中，我持續投入於資產定價模型、機器學習預測、與資料視覺化等領域，並具備跨語言與多平台開發經驗。工作上，我注重邏輯結構與細節品質，樂於面對複雜問題並從中獲得成就感，這也是驅動我持續精進的動力來源。個性上，我思維嚴謹、喜歡獨立思考，亦樂於深入理解事物的本質。除了專業領域，我也熱愛閱讀哲學與社會科學書籍，從中反思個人定位與工作意義。我相信，扎實的技術與對問題的真誠思考，才能創造出具有價值與深度的成果。',
    },
    experience: {
      title: '經歷',
      item1: {
        title: '大學',
        subtitle: '逢甲大學 資訊工程學系',
        description: '結合資訊工程與財金背景，具備資料處理、演算法與模型建構的基礎能力。',
      },
      item2: {
        title: '教育資料視覺化研究助理',
        subtitle: '教育機構合作專案（2022 - 2023）',
        description: '負責設計與實作教育數據視覺化平台，協助分析學生學習成效與課程趨勢。',
      },
      item3: {
        title: '資產定價研究與論文撰寫',
        subtitle: '學術研究與專案合作（2021 - 至今）',
        description: '從事資產定價模型建構、行為財務實證分析與金融市場異象研究，',
      },
      item4: {
        title: '碩士班',
        subtitle: '國立東華大學 財務金融學系',
        description: '',
      },
    },
    projects: {
      title: '作品集',
      project1: {
        title: '個人網站',
        description: '使用 Vue 與 Quasar 打造的作品展示網站。',
      },
      project2: {
        title: '後台儀表板',
        description: '具備即時數據與圖表的管理後台系統。',
      },
    },
    contact: {
      title: '聯絡我',
      name: '你的名字',
      email: '電子信箱',
      message: '留言內容',
      send: '送出訊息',
      thankYou: '感謝你',
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
