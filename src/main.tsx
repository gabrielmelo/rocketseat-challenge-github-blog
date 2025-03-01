import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { queryClient } from './lib/query-client'
import { App } from './pages/app'
import { Post } from './pages/post'
import { Posts } from './pages/posts'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/post" element={<Post />} />
					<Route path="/posts" element={<Posts />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>,
)
