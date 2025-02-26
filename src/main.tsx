import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { App } from './pages/app'
import { Post } from './pages/post'
import { Posts } from './pages/posts'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/post" element={<Post />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
