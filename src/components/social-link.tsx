import type { ComponentProps } from 'react'

interface SocialLinkProps extends ComponentProps<'div'> {}

export function SocialLink({ children }: SocialLinkProps) {
	return (
		<div className="flex h-6 gap-2 font-sans text-base/relaxed text-off-white">
			{children}
		</div>
	)
}
