export interface Technology {
	id: string
	title: string
	techType: techType
	isHiden: boolean
}

interface techType {
	id: string
	title: string
}

export type ChosensType = string[]