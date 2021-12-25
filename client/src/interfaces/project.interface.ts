import { Technology } from "./technology.interface";
import { User } from "./auth.interface";

export interface ShortProjectData {
	id: string
	title: string
	summary: string
	image?: string
	inWorking: boolean
	isHiden: boolean
	technologies?: Technology[]
}

export interface iProject extends ShortProjectData {
	description?: string
	link: string
	github: string
	template?: string
	createdAt: Date
	updatedAt: Date
	infos?: Info[]
	authors: User[]
}

export interface Info {
	id: string
	title: string
	descriptions?: Description[]
}

export interface Description {
	id: string
	title: string
	link: string
	children?: DescChild[]
}

interface DescChild {
	id: string
	text: string
}


export type EditListType = 'project' | 'user' | 'technology' | 'techType'


export interface iDescInput {
	title: string,
	link: string
}

export interface iInfoInput {
	title: string
}