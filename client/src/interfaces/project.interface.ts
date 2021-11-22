import { Technology } from "./technology.interface";
import { User } from "./user.interface";

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

interface Description {
	id: string
	title: string
	link: string
	children?: DescChild[]
}

interface DescChild {
	id: string
	text: string
}
