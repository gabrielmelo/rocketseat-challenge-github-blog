import { env } from '../env'
import { api } from '../lib/axios'

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

export async function getUserProfile() {
	const response = await api.get<GetUserProfileResponse>(
		`/users/${env.VITE_GITHUB_LOGIN}`,
	)

	return response.data
}
