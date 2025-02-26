import { Cover } from '../components/cover'
import { PostCard } from '../components/post-card'
import { SearchForm } from '../components/search-from'

export function Posts() {
	return (
		<div className="flex min-h-screen flex-col bg-blue-950">
			<Cover />

			<div className="mx-auto mt-[72px] w-full max-w-[864px]">
				<SearchForm />
				<div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</div>
	)
}
