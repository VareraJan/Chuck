'use client'

import { FC } from 'react'

import { JokesList } from '@/components/JokesList/JokesList'
import SearchTerm from '@/components/ui/SearchTerm/SearchTerm'

import { useSearchJokes } from '@/hooks/useSearchJokes'

const Mock = [
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
	{
		categories: [],
		created_at: '2020-01-05 13:42:20.841843',
		icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
		id: '29mUQUPYRG2AjohjN33ysw',
		updated_at: '2020-01-05 13:42:20.841843',
		url: 'https://api.chucknorris.io/jokes/29mUQUPYRG2AjohjN33ysw',
		value:
			"C'mon Chuck Norris isn't that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg",
	},
]
export const Search: FC = () => {
	const { data, handleSearch, isFetching, searchTerm, isSuccess } =
		useSearchJokes()

	// isFetching => skeletons
	// data => отрисовать карточки
	// no data => отобразить надпись
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
			{isFetching && <div>Skeleton</div>}
			{/* {data && <JokesList jokes={data.result} /> } */}
			{Mock && <JokesList jokes={Mock} />}
		</>
	)
}
