import { FC } from 'react'

import { IJoke } from '@/shared/types/types'

import { Card, CardDescription, CardFooter, CardHeader } from '../ui/card'

import styles from './JokeCard.module.scss'

export const JokeCard: FC<{ joke: IJoke }> = ({ joke }) => {
	return (
		<Card className="min-w-[450] max-w-[500px] ">
			<CardHeader>
				<CardDescription className={styles.text}>{joke.value}</CardDescription>
			</CardHeader>
			<CardFooter className=" flex justify-between text-gray-600">
				<span>{joke.id}</span>
				<span>{joke.updated_at}</span>
			</CardFooter>
		</Card>
	)
}
