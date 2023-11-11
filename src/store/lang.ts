import { Lang } from '@dolphin-admin/utils'
import type { Locale } from 'antd/lib/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface State {
  lang: string
  locale: Locale
}

interface Actions {
  setLang: (lang: string) => void
  setLocale: (locale: Locale) => void
}

const initialState: State = {
  lang: LangUtils.getDefaultLang(),

  /**
   * antd 国际化配置
   */
  locale: AntdUtils.getDefaultLocale()
}

export const useLangStore = create<State & Actions>()(
  subscribeWithSelector((set) => ({
    ...initialState,
    /**
     * 设置语言
     * @param lang 选择的语言
     */
    setLang: (lang: string) => set({ lang }),
    setLocale: (locale: Locale) => set({ locale })
  }))
)

/**
 * 监听语言改变
 * @description 改变全局状态时，自动更新 i18n 实例 和 antd 组件语言
 * @param selectedLang 选择的语言
 */
useLangStore.subscribe(
  (state) => state.lang,
  (lang) => {
    i18n.changeLanguage(lang)
    LangUtils.setLang(lang)
    LangUtils.setHtmlLang(lang)
    switch (lang) {
      case Lang['zh-CN']:
        useLangStore.setState({ locale: zhCN })
        break
      case Lang['en-US']:
        useLangStore.setState({ locale: enUS })
        break
      default:
        break
    }
  },
  {
    fireImmediately: true
  }
)
