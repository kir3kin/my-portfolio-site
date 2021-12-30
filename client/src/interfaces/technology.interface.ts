export interface Technology {
	id: string
	title: string
	techType: techType
	isHidden: boolean
}

export interface techType {
	id: string
	title: string
}

export type ChosensType = string[]