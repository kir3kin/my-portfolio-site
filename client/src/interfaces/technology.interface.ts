export interface Technology {
	id: string
	title: string
	techType: techType
	isHiden: boolean
}

export interface techType {
	id: string
	title: string
}

export type ChosensType = string[]