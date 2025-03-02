import { api } from '../lib/axios'
import type { Issue } from './get-issue-repository'

interface GetIssuesInRespositoryParams {
	query: string
	username: string
	repo: string
}

interface GetIssuesInRespositoryResponse {
	total_count: number
	items: Issue[]
}

export async function getIssuesInRepository({
	query,
	repo,
	username,
}: GetIssuesInRespositoryParams) {
	const response = await api.get<GetIssuesInRespositoryResponse>(
		'/search/issues',
		{
			params: {
				q: `${query} repo:${username}/${repo}`,
				order: 'asc',
			},
		},
	)

	return response.data
}
