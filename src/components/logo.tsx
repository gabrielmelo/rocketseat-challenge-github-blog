import { Link } from 'react-router'

export function Logo() {
	return (
		<Link to={'/'} className="m-auto mt-16 mb-12 h-[98px] w-[148px]">
			<img src="/images/logo.svg" alt="" className="w-full object-fill" />
		</Link>
	)
}
