import type { MenuProps } from 'antd'

import UniversalComponentsIcon from '~icons/ic/baseline-auto-awesome-mosaic'
import ChartsIcon from '~icons/ic/baseline-bar-chart'
import UnauthorizedIcon from '~icons/ic/baseline-do-not-disturb'
import ErrorPagesIcon from '~icons/ic/baseline-error-outline'
import ListTemplatesIcon from '~icons/ic/outline-list-alt'
import IAmATeapotIcon from '~icons/icon-park-outline/tea-drink'
import InternalServerErrorIcon from '~icons/lucide/server-off'
import UserManagementIcon from '~icons/mdi/account-cog-outline'
import NavigationIcon from '~icons/mdi/compass-outline'
import SystemFunctionsIcon from '~icons/mdi/function-variant'
import DictionaryManagementIcon from '~icons/ri/booklet-line'
import CodeTemplatesIcon from '~icons/solar/code-bold'
import NotFoundIcon from '~icons/tabler/error-404'

type MenuItem = Required<MenuProps>['items'][number]

const { t } = i18n

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label
})

export const menu: MenuItem[] = [
  getItem(t('GLOBAL:Menu.Navigation'), 'Navigation', <AIcon component={NavigationIcon} />),
  getItem(
    t('GLOBAL:Menu.SystemFunctions'),
    'SystemFunctions',
    <AIcon component={SystemFunctionsIcon} />,
    [
      getItem(
        t('GLOBAL:Menu.UserManagement'),
        'UserManagement',
        <AIcon component={UserManagementIcon} />
      ),
      getItem(
        t('GLOBAL:Menu.DictionaryManagement'),
        'DictionaryManagement',
        <AIcon component={DictionaryManagementIcon} />
      )
    ]
  ),
  getItem(
    t('GLOBAL:Menu.CodeTemplates'),
    'CodeTemplates',
    <AIcon component={CodeTemplatesIcon} />,
    [
      getItem(
        t('GLOBAL:Menu.ListTemplates'),
        'ListTemplates',
        <AIcon component={ListTemplatesIcon} />
      )
    ]
  ),
  getItem(
    t('GLOBAL:Menu.UniversalComponents'),
    'UniversalComponents',
    <AIcon component={UniversalComponentsIcon} />,
    [getItem(t('GLOBAL:Menu.Charts'), 'Charts', <AIcon component={ChartsIcon} />)]
  ),
  getItem(t('GLOBAL:Menu.ErrorPages'), 'ErrorPages', <AIcon component={ErrorPagesIcon} />, [
    getItem(t('GLOBAL:Menu.403'), 'Unauthorized', <AIcon component={UnauthorizedIcon} />),
    getItem(t('GLOBAL:Menu.404'), 'NotFound', <AIcon component={NotFoundIcon} />),
    getItem(t('GLOBAL:Menu.418'), 'IAmATeapot', <AIcon component={IAmATeapotIcon} />),
    getItem(
      t('GLOBAL:Menu.500'),
      'InternalServerError',
      <AIcon component={InternalServerErrorIcon} />
    )
  ])
]
