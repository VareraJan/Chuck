'use client'

import { FC } from 'react'

import { JokesList } from '@/components/JokesList/JokesList'
import SearchTerm from '@/components/ui/SearchTerm/SearchTerm'
import { SkeletonJokes } from '@/components/ui/SkeletonJokes/SkeletonJokes'

import { useSearchJokes } from '@/hooks/useSearchJokes'

export const Search: FC = () => {
	const { data, handleSearch, isFetching, searchTerm, error } = useSearchJokes()

	// todo подключить Toastr для вывода ошибок
	return (
		<>
			<div className="w-[200px] mx-auto mt-5 ">
				<SearchTerm searchTerm={searchTerm} handleSearchTerm={handleSearch} />
				{data && data.total > 0 && !isFetching && (
					<span className="mt-1 ml-2 text-sm italic">
						Total count: {data.total}
					</span>
				)}
			</div>
			{data && data.total === 0 && !isFetching && (
				<div className="w-44 text-2xl text-center font-bold mt-20 mx-auto">
					No jokes here
				</div>
			)}
			<div className=" w-screen  bg-primary"></div>

			<JokesList jokes={data?.result || []} isLoading={isFetching} />
		</>
	)
}
