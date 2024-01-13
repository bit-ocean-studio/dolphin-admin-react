interface AuthGuardProps {
  /**
   * 是否跳过认证
   * @default false
   */
  skipAuth?: boolean
}

export const useAuthGuard = (props?: AuthGuardProps) => {
  const { skipAuth = false } = props ?? {}

  const navigate = useNavigate()
  const userStore = useUserStore()

  // 用户信息
  const profileQuery = useQuery({
    queryKey: [UserAPI.PROFILE_QUERY_KEY],
    queryFn: () => UserAPI.profile(),
    select: (data) => data.data,
    enabled: false // 不自动执行
  })

  const [isLoading, setIsLoading] = useState(true)

  useAsyncEffect(async () => {
    // 如果已经登录，直接跳转到首页，否则清除用户信息
    if (!AuthUtils.isAuthenticated()) {
      // 清除用户信息并跳转到登录页
      userStore.clearUser()
      if (!skipAuth) {
        navigate(`/login?redirect=${window.location.pathname}`, {
          replace: true
        })
      }
      setIsLoading(false)
      return
    }

    // 处理登录逻辑
    if (!userStore.hasData()) {
      const user = (await profileQuery.refetch()).data
      userStore.setUser(user ?? {})
    }

    // 如果跳过认证，直接跳转到首页
    if (skipAuth) {
      navigate('/', { replace: true })
    }

    setIsLoading(false)
  }, [])

  return { isLoading }
}
