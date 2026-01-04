
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const useRole = () => {
    const { User, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    // const { data: role, isLoading: isRoleLoading } = useQuery({
    //     enabled: !loading && !!User?.email,
    //     queryKey: ['role', User?.email],
    //     queryFn: async () => {
    //         const result = await axiosSecure.get('/user/role')
    //         console.log('ROLE API RESPONSE 👉', result.data)
    //         return result.data.role

    //     },
    // })


    const { data: role = 'user', isLoading: isRoleLoading } = useQuery({
  enabled: !loading && !!User?.email,
  queryKey: ['role', User?.email],
  queryFn: async () => {
    const result = await axiosSecure.get('/user/role')
    console.log('ROLE API RESPONSE 👉', result.data)
    return result.data?.role || 'user'
  },
})


    //   return { role, isRoleLoading }
    return [role, isRoleLoading]
}

export default useRole