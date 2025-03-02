import type { ComponentProps } from 'react'
import { Link } from 'react-router'
import { SocialLink } from './social-link'

interface ProfileProps extends ComponentProps<'div'> {
	name: string | undefined
	login: string
	bio: string | null
	email?: string | null
	followers: number | null
	html_url: string
	company: string | null
	avatarUrl: string | undefined
}

function ProfileBio({ children }: ComponentProps<'div'>) {
	return <div className="text-base text-off-white">{children}</div>
}

function ProfileCallToAction({ url }: { url: string }) {
	return (
		<Link
			target={'_blank'}
			to={url}
			className="flex items-center gap-2 font-bold text-accent text-sm uppercase"
		>
			Github
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				width="12"
				height="13"
				viewBox="0 0 12 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.80357 1.67857C6.80357 1.23485 7.16267 0.875 7.60714 0.875H10.7988C10.9294 0.875 11.0349 0.896596 11.1278 0.936021C11.2006 0.974944 11.3111 1.03245 11.389 1.10854C11.389 1.10979 11.389 1.11105 11.3915 1.11205C11.5472 1.26825 11.6024 1.47215 11.625 1.67606C11.625 1.67706 11.625 1.67782 11.625 1.67857V4.89286C11.625 5.33733 11.2659 5.69643 10.8214 5.69643C10.377 5.69643 10.0179 5.33733 10.0179 4.89286V3.6197L5.76395 7.87109C5.45006 8.18499 4.9428 8.18499 4.62891 7.87109C4.31501 7.5572 4.31501 7.04994 4.62891 6.73605L8.8803 2.48214H7.60714C7.16267 2.48214 6.80357 2.12229 6.80357 1.67857ZM0.375 3.28571C0.375 2.39802 1.09445 1.67857 1.98214 1.67857H4.39286C4.83733 1.67857 5.19643 2.03842 5.19643 2.48214C5.19643 2.92662 4.83733 3.28571 4.39286 3.28571H1.98214V10.5179H9.21429V8.10714C9.21429 7.66267 9.57338 7.30357 10.0179 7.30357C10.4623 7.30357 10.8214 7.66267 10.8214 8.10714V10.5179C10.8214 11.4043 10.1007 12.125 9.21429 12.125H1.98214C1.09445 12.125 0.375 11.4043 0.375 10.5179V3.28571Z"
					fill="#3294F8"
				/>
			</svg>
		</Link>
	)
}

function ProfileContent({ children }: ComponentProps<'div'>) {
	return <div className="flex grow flex-col gap-6">{children}</div>
}

function ProfileSocialContent({ children }: ComponentProps<'div'>) {
	return <div className="flex gap-6">{children}</div>
}

export function Profile({
	name,
	bio,
	avatarUrl,
	html_url,
	login,
	company,
	followers,
}: ProfileProps) {
	return (
		<div
			className="flex w-[864px] rounded-xl bg-blue-800 px-10 py-8"
			style={{ backgroundImage: '/images/profile-bg.jpg' }}
		>
			<div className="mr-6 h-auto w-full max-w-[158px] grow-0 lg:mr-6">
				<img
					className="aspect-square overflow-hidden rounded-xl object-contain object-center"
					alt=""
					src={avatarUrl}
					width={158}
					height={158}
				/>
			</div>

			<ProfileContent>
				<div className="flex justify-between">
					<span className="font-bold text-2xl text-off-white">{name}</span>

					{html_url && <ProfileCallToAction url={html_url} />}
				</div>

				{bio && <ProfileBio>{bio}</ProfileBio>}

				<ProfileSocialContent>
					{login && (
						<SocialLink>
							<img src="/icons/github.svg" alt="Github" />
							<span>{login}</span>
						</SocialLink>
					)}

					{company && (
						<SocialLink>
							<img src="/icons/company.svg" alt="Company" />
							<span>{company}</span>
						</SocialLink>
					)}

					{followers && (
						<SocialLink>
							<img src="/icons/followers.svg" alt="Followers" />
							<span>
								{followers} {followers > 1 ? 'Seguidores' : 'Seguidor'}
							</span>
						</SocialLink>
					)}
				</ProfileSocialContent>
			</ProfileContent>
		</div>
	)
}
