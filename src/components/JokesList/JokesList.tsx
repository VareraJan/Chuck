import { FC } from 'react'

import { IJokeList } from '@/shared/types/types'

import { SkeletonJokes } from '../ui/SkeletonJokes/SkeletonJokes'

import { JokeCard } from './JokeCard'

export const JokesList: FC<IJokeList> = ({ jokes, isLoading }) => {
	return (
		<div className="mt-10 flex flex-wrap gap-2 w-full justify-center">
			{isLoading && <SkeletonJokes />}
			{jokes && jokes.map((joke) => <JokeCard key={joke.id} joke={joke} />)}
		</div>
	)
}
