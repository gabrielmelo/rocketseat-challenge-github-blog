import { api } from '../lib/axios'

export interface Issue {
	number: number
	title: string
	created_at: string
	description?: string | null
	body?: string
}

interface GetIssueInRepositoryParams {
	username: string
	repo: string
	issueNumber: number
}

export async function getIssueInRepository({
	username,
	repo,
	issueNumber,
}: GetIssueInRepositoryParams) {
	const response = await api.get<Issue>(
		`/repos/${username}/repos/${repo}/issues/${issueNumber}`,
	)

	return response.data
}
