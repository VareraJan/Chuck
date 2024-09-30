import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

import { JokesService } from '@/services/jokes.service'

import { useDebounce } from './useDebounce'

export const useSearchJokes = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { isFetching, data, isSuccess } = useQuery({
		queryKey: ['searchTerm in jokes', debouncedSearch],
		queryFn: () => JokesService.searchJokes(debouncedSearch),
		enabled: !!debouncedSearch && debouncedSearch.length >= 4,
		retry: 3,
		gcTime: Infinity,
		staleTime: Infinity,
	})

	return { isFetching, data, searchTerm, handleSearch, isSuccess }
}
