import { Link } from 'react-router'
import { dayjs } from '../lib/days'

interface PostCardProps {
	number: string
	title: string
	repo: string
	createdAt: Date | string
	description?: string | null
}

export function PostCard({
	number,
	title,
	repo,
	createdAt,
	description,
}: PostCardProps) {
	return (
		<Link to={`/post/${repo}/${number}`} className="rounded-xl bg-blue-500 p-8">
			<div className="mb-5 flex justify-between">
				<h1 className="text-off-white text-xl">{title}</h1>
				<time className="shrink-0 pt-2 text-blue-200 text-sm leading-none">
					{dayjs(createdAt).fromNow()}
				</time>
			</div>
			<p className="line-clamp-3 text-base text-blue-100">{description}</p>
		</Link>
	)
}
