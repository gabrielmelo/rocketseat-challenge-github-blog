// q = ${ texto }% 20repo:${ username }/${repo}

import { api } from "../lib/axios"

interface GetRepositoriesResponse {
	id: string
	name: string
	description?:	string | null
	createdAt: string
}

interface GetRepositoriesParams {
	username: string
}

export async function getRepositories({ username }: GetRepositoriesParams) {
	const response = await api.get<GetRepositoriesResponse>(`/users/${username}/repos`)

	return response.data
}
