import { Cover } from '../components/cover'
import { PostCard } from '../components/post-card'
import { Profile } from '../components/profile'
import { SearchForm } from '../components/search-from'
import { useProfile } from '../hooks/use-profile'

export function App() {
	const { data: profile } = useProfile({
		username: 'gabrielmelo'
	})

	return (
		<div className="flex min-h-screen flex-col bg-blue-950">
			{profile && (
				<Cover>
					<Profile
						name={profile.name}
						bio={profile.bio}
						avatarUrl={profile.avatar_url}
						html_url={profile.html_url}
						company={profile.company}
						login={profile.login}
						followers={profile.followers}
					/>
				</Cover>
			)}

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
