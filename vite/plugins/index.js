import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'

// 加载插件入口
export default function createVitePlugins () {
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  return vitePlugins
}
