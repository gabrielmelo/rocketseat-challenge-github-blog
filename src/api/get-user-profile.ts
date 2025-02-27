import { api } from "../lib/axios"

interface GetUserProfileParams {
	username: string
}

export interface GetUserProfileResponse {
	name: string
	login: string
	bio: string | null
	email?: string | null
	followers: number | null
	html_url: string
	company: string | null
	avatar_url: string
}

export async function getUserProfile({ username }: GetUserProfileParams) {

	const response = await api.get<GetUserProfileResponse>(`/users/${username}`)

	return response.data
}
