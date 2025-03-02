import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router'
import { Cover } from '../components/cover'
import { SocialLink } from '../components/social-link'
import { useIssue } from '../hooks/use-issue'
import { dayjs } from '../lib/days'

export function Post() {
	const { repo, number } = useParams()

	const { issue, isFetching } = useIssue({
		repo,
		number,
	})

	return (
		!isFetching && (
			<div className="">
				<Cover>
					<div className="mx-auto w-[864px]">
						<div className="flex flex-col gap-5 rounded-xl bg-blue-800 px-10 py-8">
							<div className="flex justify-between">
								<Link to="/" className="flex items-center gap-2">
									<img src="/icons/arrow-left.svg" alt="" />
									<b className="text-accent text-sm uppercase">voltar</b>
								</Link>

								<Link
									target="_blank"
									to="https://github.com/gabrielmelo"
									className="flex items-center gap-2"
								>
									<b className="text-accent text-sm uppercase">ver no github</b>
									<img src="/icons/external.svg" alt="External Link" />
								</Link>
							</div>

							<div className="flex flex-col justify-between gap-2">
								<h1 className="font-bold text-2xl text-off-white">
									{issue?.title}
								</h1>

								<div className="flex gap-6">
									<SocialLink>
										<img src="/icons/github.svg" alt="Github" />
										<span>{issue?.assignee.login}</span>
									</SocialLink>

									<SocialLink>
										<img src="/icons/time.svg" alt="Company" />
										<span>{dayjs(issue?.created_at).fromNow()}</span>
									</SocialLink>

									<SocialLink>
										<img src="/icons/comment.svg" alt="Followers" />
										<span>
											{(issue?.comments ?? 0) > 1
												? `${issue?.comments ?? issue?.comments} Comentários`
												: `${issue?.comments ?? issue?.comments} Comentário`}
										</span>
									</SocialLink>
								</div>
							</div>
						</div>
						<div className="w-full max-w-[864px] space-y-4 px-8 py-10 text-off-white">
							<Markdown>{issue?.body}</Markdown>
						</div>
					</div>
				</Cover>
			</div>
		)
	)
}
