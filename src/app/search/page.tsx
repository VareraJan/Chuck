import { Metadata } from 'next'
import { FC } from 'react'

import { Search } from '@/components/screens/Search/Search'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Поисковик'),
	description: 'Поисковик Чака',
}

const Page: FC = () => {
	return (
		<>
			<div>
				<Search />
			</div>
		</>
	)
}

export default Page
