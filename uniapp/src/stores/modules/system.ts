import type { SystemInfo } from '@/types/system'

export const useSystemStore = defineStore(
  'system',
  () => {
    const systemInfo = ref<SystemInfo>()

    // 设置系统信息
    const setSystemInfo = (info: SystemInfo) => {
      systemInfo.value = info
    }

    return {
      systemInfo,
      setSystemInfo
    }
  },
  {
    persist: true
  }
)
