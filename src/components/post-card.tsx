export function PostCard() {
	return (
		<div className="rounded-xl bg-blue-500 p-8">
			<div className="mb-5 flex justify-between">
				<h1 className="text-off-white text-xl">
					JavaScript data types and data structures
				</h1>
				<time className="shrink-0 pt-2 text-blue-200 text-sm leading-none">
					Há 1 dia
				</time>
			</div>
			<p className="line-clamp-3 text-base text-blue-100">
				Programming languages all have built-in data structures, but these often
				differ from one language to another. This article attempts to list the
				built-in data structures available in JavaScript and what properties
				they have.
			</p>
		</div>
	)
}
