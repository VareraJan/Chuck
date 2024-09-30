import { ChangeEvent, FC } from 'react'

import { Input } from '../input'

import { cn } from '@/lib/utils'

interface ISearchTerm {
	className?: string
	searchTerm: string
	handleSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchTerm: FC<ISearchTerm> = ({
	handleSearchTerm,
	searchTerm,
	className,
}) => {
	return (
		<Input
			className={className}
			placeholder="Search jokes"
			onChange={handleSearchTerm}
			value={searchTerm}
		/>
	)
}

export default SearchTerm
