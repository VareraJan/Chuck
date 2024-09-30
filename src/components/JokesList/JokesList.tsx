import { FC } from 'react'

import { IJoke } from '@/shared/types/types'

import { JokesCard } from './JokesCard'

export const JokesList: FC<{ jokes: IJoke[] }> = ({ jokes }) => {
	return (
		<div className="mt-10 flex flex-wrap gap-2 w-full justify-center">
			{jokes.map((joke) => (
				<JokesCard key={joke.id} joke={joke} />
			))}
		</div>
	)
}
