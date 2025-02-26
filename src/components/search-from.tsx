export function SearchForm() {
	// const { } =
	return (
		<form>
			<div>
				<div className="mb-3 flex justify-between">
					<label className="font-bold text-lg text-off-white" htmlFor="search">
						Publicações
					</label>
					<span className="text-blue-300 text-sm">6 publicações</span>
				</div>
				<input
					className="h-12 w-full rounded-xl border border-blue-400 bg-blue-950 p-3 text-blue-100 placeholder-blue-300"
					placeholder="Buscar conteúdo"
					id="search"
				/>
			</div>
		</form>
	)
}
