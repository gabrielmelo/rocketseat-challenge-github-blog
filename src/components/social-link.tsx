import type { ComponentProps } from 'react'
import { Link } from 'react-router'

interface SocialLinkProps extends ComponentProps<'a'> {}

export function SocialLink({ children, ...props }: SocialLinkProps) {
	return (
		<Link
			to="#"
			className="flex h-6 gap-2 font-sans text-base/relaxed text-off-white"
			{...props}
		>
			{children}
		</Link>
	)
}
