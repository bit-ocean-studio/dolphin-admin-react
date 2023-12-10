import type { BasePageModel } from '@/constants'
import type { Page, R, Setting } from '@/types'
import type { CreateTemplateSettingModel, UpdateTemplateSettingModel } from '@/types/api/template'

export class TemplateAPI {
  private static SETTING_API_PREFIX = `${GlobalEnvConfig.MOCK_API_PREFIX}/settings`

  /**
   * 设置列表缓存 key
   */
  static LIST_QUERY_KEY = 'TEMPLATE.SETTING.LIST'

  /**
   * 模版设置列表
   */
  static list(params: BasePageModel) {
    return httpRequest.get<R<Page<Setting>>>(this.SETTING_API_PREFIX, {
      ...params
    })
  }

  /**
   * 模版设置详情
   */
  static detail(id: number) {
    return httpRequest.get<R<Setting>>(`${this.SETTING_API_PREFIX}/${id}`)
  }

  /**
   * 新增模版设置
   */
  static create(data: CreateTemplateSettingModel) {
    return httpRequest.get<R>(`${this.SETTING_API_PREFIX}`, { ...data })
  }

  /**
   * 更新模版设置
   */
  static update(id: number, data: UpdateTemplateSettingModel) {
    return httpRequest.get<R>(`${this.SETTING_API_PREFIX}/${id}`, { ...data })
  }

  /**
   * 修改模版设置
   */
  static patch(id: number) {
    return httpRequest.patch<R>(`${this.SETTING_API_PREFIX}/${id}`)
  }

  /**
   * 删除模版设置
   */
  static delete(id: number) {
    return httpRequest.delete<R>(`${this.SETTING_API_PREFIX}/${id}`)
  }
}
