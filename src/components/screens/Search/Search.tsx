'use client'

import { FC } from 'react'

import SearchTerm from '@/components/ui/SearchTerm/SearchTerm'

import { useSearchJokes } from '@/hooks/useSearchJokes'

export const Search: FC = () => {
	const { data, handleSearch, isSuccess, searchTerm } = useSearchJokes()

	return (
		<div>
			<SearchTerm searchTerm={searchTerm} handleSearchTerm={handleSearch} />
		</div>
	)
}
