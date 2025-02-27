import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../api/get-repositories";

interface UseProfileParams {
	username: string
}

export function useRepositories({ username }: UseProfileParams) {
	const { data } = useQuery({
		queryKey: ['repositories'],
		queryFn: async () => getRepositories({
			username
		})
	})

	return {
		data
	}
}
