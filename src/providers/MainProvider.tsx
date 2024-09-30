'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default MainProvider
