import { Cover } from '../components/cover'
import { PostCard } from '../components/post-card'
import { Profile } from '../components/profile'
import { SearchForm } from '../components/search-from'

const profile = {
	name: 'Gabriel Melo',
	bio: 'Bio',
}

export function App() {
	return (
		<div className="flex min-h-screen flex-col bg-blue-950">
			<Cover>
				<Profile name={profile.name} />
			</Cover>

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
