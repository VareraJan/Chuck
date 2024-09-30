export interface IJoke {
	categories: string[]
	created_at: string
	icon_url: string
	id: string
	updated_at: string
	url: string
	value: string
}

export interface IJokeList {
	jokes: IJoke[] | undefined
	isLoading?: boolean
}

export interface IResponseSearchJokes {
	total: number
	result: IJoke[]
}
