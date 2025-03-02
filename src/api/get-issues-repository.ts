import { env } from '../env'
import { api } from '../lib/axios'
import type { Issue } from './get-issue-repository'

interface GetIssuesInRespositoryParams {
	query: string
	repo: string
}

interface GetIssuesInRespositoryResponse {
	total_count: number
	items: Issue[]
}

export async function getIssuesInRepository({
	query,
	repo,
}: GetIssuesInRespositoryParams) {
	const response = await api.get<GetIssuesInRespositoryResponse>(
		'/search/issues',
		{
			params: {
				q: `${query} repo:${env.VITE_GITHUB_LOGIN}/${repo}`,
				order: 'desc',
			},
		},
	)

	return response.data
}
