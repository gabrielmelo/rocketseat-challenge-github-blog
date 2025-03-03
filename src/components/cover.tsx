import type { ComponentProps } from 'react'
import { Logo } from './logo'

export function Cover({ children }: ComponentProps<'div'>) {
	return (
		<div
			className="mb-36 flex h-72 w-full flex-col items-center bg-center bg-cover bg-no-repeat drop-shadow-lg"
			style={{ backgroundImage: "url('/images/profile-bg.jpg')" }}
		>
			<Logo />

			<div>{children}</div>
		</div>
	)
}
