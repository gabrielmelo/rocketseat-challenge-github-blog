import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

interface SearchFormProps {
	totalCount: number
}

const searchFormSchema = z.object({
	search: z.string().min(2),
})

type SearchFormBody = z.infer<typeof searchFormSchema>

export function SearchForm({ totalCount }: SearchFormProps) {
	const [searchParams, setSearchParams] = useSearchParams()

	const search = searchParams.get('search')

	const { register, handleSubmit } = useForm<SearchFormBody>({
		resolver: zodResolver(searchFormSchema),
		defaultValues: {
			search: '',
		},
	})

	function handleSearch({ search }: SearchFormBody) {
		setSearchParams((state) => {
			state.set('search', search)
			return state
		})
	}

	function handleCleanSearch() {
		setSearchParams((state) => {
			state.delete('search')
			return state
		})
	}

	return (
		<form
			onSubmit={handleSubmit(handleSearch)}
			className="flex items-end gap-4"
		>
			<div className="grow-1">
				<div className="mb-3 flex justify-between">
					<label className="font-bold text-lg text-off-white" htmlFor="search">
						Publicações
					</label>
					<span className="text-blue-300 text-sm">
						{totalCount > 1
							? `${totalCount} publicações`
							: `${totalCount} publicação`}
					</span>
				</div>
				<input
					className="h-12 w-full rounded-xl border border-blue-400 bg-blue-950 p-3 text-blue-100 placeholder-blue-300"
					placeholder="Buscar conteúdo"
					{...register('search')}
				/>
			</div>

			<button
				type="submit"
				className="h-12 rounded-xl border border-b-off-white bg-off-white px-4 text-blue-800"
			>
				Buscar
			</button>
		</form>
	)
}
