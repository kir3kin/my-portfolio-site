import { Technology } from "./technology.interface";
import { User } from "./user.interface";

export interface ShortProjectData {
	id: string
	title: string
	summary: string
	image?: string
	inWorking: Boolean
	isHide: Boolean
	technologies?: Technology[]
}

export interface iProject extends ShortProjectData {
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
