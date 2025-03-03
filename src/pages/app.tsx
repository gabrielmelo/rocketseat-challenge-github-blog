import { useSearchParams } from 'react-router'
import { Cover } from '../components/cover'
import { PostCard } from '../components/post-card'
import { Profile } from '../components/profile'
import { SearchForm } from '../components/search-from'
import { useIssuesInRepository } from '../hooks/use-issues-repository'
import { useProfile } from '../hooks/use-profile'

export function App() {
	const REPO = 'rocketseat-challenge-github-blog'
	const USERNAME = 'gabrielmelo'

	const [searchParams] = useSearchParams()

	const { data: profile } = useProfile({
		username: USERNAME,
	})

	const querySearch = searchParams.get('search')

	const { issues, totalCount, isLoading } = useIssuesInRepository({
		query: querySearch ?? '',
		username: USERNAME,
		repo: REPO,
	})

	return (
		<div className="flex flex-col bg-blue-950">
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
				<SearchForm totalCount={totalCount} />

				<div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
					{isLoading
						? 'Loading...'
						: issues.map((issue) => (
								<PostCard
									key={issue.number}
									title={issue.title}
									repo={REPO}
									number={issue.number}
									createdAt={issue.created_at}
									description={issue.description}
								/>
							))}
				</div>
			</div>
		</div>
	)
}
