import { Link } from 'react-router'
import { Cover } from '../components/cover'
import { SocialLink } from '../components/social-link'

export function Post() {
	return (
		<div className="flex min-h-screen flex-col bg-blue-950">
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

						<div className="flex justify-between">
							<h1 className="font-bold text-2xl text-off-white">
								JavaScript data types and data structures
							</h1>

							<div className="flex gap-6">
								<SocialLink href="#">
									<img src="/icons/github.svg" alt="Github" />
									<span>Github</span>
								</SocialLink>

								<SocialLink href="#">
									<img src="/icons/company.svg" alt="Company" />
									<span>Rocketseat</span>
								</SocialLink>

								<SocialLink href="#">
									<img src="/icons/followers.svg" alt="Followers" />
									<span>Follows</span>
								</SocialLink>
							</div>
						</div>
					</div>
					<div className="w-full max-w-[864px] space-y-4 px-8 py-10">
						<p>
							Programming languages all have built-in data structures, but these
							often differ from one language to another. This article attempts
							to list the built-in data structures available in JavaScript and
							what properties they have. These can be used to build other data
							structures. Wherever possible, comparisons with other languages
							are drawn.
						</p>
						<p>
							<a href="#dynamic">Dynamic typing</a> JavaScript is a loosely
							typed and dynamic language. Variables in JavaScript are not
							directly associated with any particular value type, and any
							variable can be assigned (and re-assigned) values of all types:
						</p>
						<code>
							let foo = 42;
							foo = ‘bar’;
							string foo = true;
						</code>
					</div>
				</div>
			</Cover>
		</div>
	)
}
