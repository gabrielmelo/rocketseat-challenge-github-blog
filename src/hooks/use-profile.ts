import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../api/get-user-profile'

interface UseProfileParams {
	username: string
}

export function useProfile({ username }: UseProfileParams) {
	const { data, isLoading, isFetching, isError } = useQuery({
		queryKey: ['profile'],
		queryFn: async () =>
			getUserProfile({
				username,
			}),
	})

	return {
		data,
		isLoading,
		isFetching,
		isError,
	}
}
