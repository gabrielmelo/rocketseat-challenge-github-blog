import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'
import { getIssuesInRepository } from '../api/get-issues-repository'

interface UseIssuesParams {
	query: string
	username: string
	repo: string
}

export function useIssuesInRepository({ query, repo }: UseIssuesParams) {
	const [searchParams] = useSearchParams()

	const querySearch = searchParams.get('search')

	const { data, isFetched, isLoading } = useQuery({
		queryKey: ['issues', querySearch],
		queryFn: async () =>
			getIssuesInRepository({
				query,
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
