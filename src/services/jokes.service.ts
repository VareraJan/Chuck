import { IResponseSearchJokes } from '@/shared/types/types'

import { getSearchJokesURL } from '@/config/api.config'

import { axiosApp } from '@/api/interceptor'

export const JokesService = {
	async searchJokes(string: string) {
		const { data } = await axiosApp.get<IResponseSearchJokes>(
			getSearchJokesURL(string)
		)

		return data
	},
}
