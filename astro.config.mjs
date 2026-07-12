// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/counselling-for-toads',
  integrations: [
    starlight({
      title: '蛤蟆先生去看心理師',
      description: '跟著蛤蟆先生的十次諮商,認識溝通分析心理學——把童年的劇本改寫成自己的人生。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '危機與轉介',
          items: [
            { label: '蛤蟆的低潮與朋友的介入', slug: 'unit00' },
            { label: '誰是我的當事人:初次會談', slug: 'unit01' },
          ],
        },
        {
          label: '兒童自我狀態',
          items: [
            { label: '情緒溫度計與自然型兒童', slug: 'unit02' },
            { label: '從自然型兒童到適應型兒童', slug: 'unit03' },
            { label: '童年記憶與順從的行為', slug: 'unit04' },
            { label: '憤怒去哪裡了:從嘔氣看情緒偽裝', slug: 'unit05' },
          ],
        },
        {
          label: '父母自我狀態',
          items: [
            { label: '老獾來訪與可憐的我遊戲', slug: 'unit06' },
            { label: '父母自我狀態與自我懲罰', slug: 'unit07' },
          ],
        },
        {
          label: '成人自我狀態',
          items: [
            { label: '成人自我狀態:從責怪到負責', slug: 'unit08' },
          ],
        },
        {
          label: '人生腳本與心理遊戲',
          items: [
            { label: '蛤蟆的人生故事', slug: 'unit09' },
            { label: '人生腳本與自證預言', slug: 'unit10' },
            { label: '我不好你好:受害者的心理遊戲', slug: 'unit11' },
            { label: '我好你不好:迫害者的遊戲與蛤蟆的反抗', slug: 'unit12' },
          ],
        },
        {
          label: '蛻變與新生',
          items: [
            { label: '從倚賴走向獨立:最後一次諮商', slug: 'unit13' },
            { label: '紅獅酒店的告別午宴', slug: 'unit14' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
