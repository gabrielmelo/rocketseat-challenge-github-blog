import type { ComponentProps } from 'react'

export function Cover({ children }: ComponentProps<'div'>) {
	return (
		<div
			className="mb-36 flex h-72 w-full flex-col items-center bg-center bg-cover bg-no-repeat drop-shadow-lg"
			style={{ backgroundImage: "url('/images/profile-bg.jpg')" }}
		>
			<div className="m-auto mt-16 h-[98px] w-[148px]">
				<img src="/images/logo.svg" alt="" className="w-full object-fill" />
			</div>

			<div className="-mb-36">{children}</div>
		</div>
	)
}
