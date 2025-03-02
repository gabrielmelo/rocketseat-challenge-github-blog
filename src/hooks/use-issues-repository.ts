import { useQuery } from '@tanstack/react-query'
import { getIssuesInRepository } from '../api/get-issues-repository'

interface UseIssuesParams {
	query: string
	username: string
	repo: string
}

export function useIssuesInRepository({
	query,
	username,
	repo,
}: UseIssuesParams) {
	const { data, isFetched, isLoading } = useQuery({
		queryKey: ['issues'],
		queryFn: async () =>
			getIssuesInRepository({
				query,
				username,
				repo,
			}),
	})

	return {
		issues: data ? data.items : [],
		totalCount: data ? data.total_count : 0,
		isFetched,
		isLoading,
	}
}
