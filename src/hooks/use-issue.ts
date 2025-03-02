import { useQuery } from '@tanstack/react-query'
import { getIssueInRepository } from '../api/get-issue-repository'

interface UseIssueParams {
	repo: string | undefined
	number: string | undefined
}

export function useIssue({ repo, number }: UseIssueParams) {
	const { data, isFetched, isFetching } = useQuery({
		queryKey: ['issue'],

		queryFn: async () =>
			getIssueInRepository({
				repo,
				number,
			}),
	})

	return {
		issue: data,
		isFetched,
		isFetching,
	}
}
