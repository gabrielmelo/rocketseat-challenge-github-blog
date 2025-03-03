import { env } from '../env'
import { api } from '../lib/axios'

interface Assignee {
	login: string
}

export interface Issue {
	number: string
	title: string
	description?: string | null

	comments: number
	assignee: Assignee
	created_at: string

	body?: string
}

interface GetIssueInRepositoryParams {
	repo: string | undefined
	number: string | undefined
}

export async function getIssueInRepository({
	repo,
	number,
}: GetIssueInRepositoryParams) {
	const response = await api.get<Issue>(
		`/repos/${env.VITE_GITHUB_LOGIN}/${repo}/issues/${number}`,
	)

	return response.data
}
