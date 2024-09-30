import { FC } from 'react'

import { Skeleton } from '../skeleton'

import { cn } from '@/lib/utils'

export const SkeletonJokes: FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<Skeleton
				className={cn(
					'min-w-[450px] max-w-[500px] h-[120px] bg-slate-400',
					className
				)}
			/>
			<Skeleton
				className={cn(
					'min-w-[450px] max-w-[500px] h-[120px] bg-slate-400',
					className
				)}
			/>
		</>
	)
}
