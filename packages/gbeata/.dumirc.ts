import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'gbeata',
    mfsu: false,
    // 单语言时配置数组即可
    // features: [{ title: '开箱即用'}, { description: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
    // 多语言时配置对象，key 为语言名
    features: {
      'zh-CN': [
        { title: '开箱即用' },
        { description: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。' },
      ],
      'en-US': [
        { title: 'Simple Use' },
        {
          description:
            'Simple access, installation and use, fully integrated into Ant Design 5.0 style.',
        },
      ],
    },
  },
});
