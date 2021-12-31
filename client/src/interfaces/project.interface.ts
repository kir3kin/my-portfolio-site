import { Technology } from "./technology.interface";
import { User } from "./auth.interface";

export interface ShortProjectData {
	id: string
	title: string
	summary: string
	showOrder: string
	image?: string
	inWorking: boolean
	isHidden: boolean
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
	author: User
}

export type iMainProjectData = Pick<iProject, "id" | "title" | "createdAt" | "updatedAt" | "showOrder" | "isHidden" | "author">

export interface Info {
	id: string
	title: string
	descriptions?: Description[]
}

export interface Description {
	id: string
	projectInfoId?: string
	title: string
	link: string
	children?: DescChild[]
}

interface DescChild {
	id: string
	text: string
}


export type ProjectListType = 'project' | 'user' | 'technology' | 'techType'


export interface iDescInput {
	title: string,
	link: string
}

export interface iInfoInput {
	title: string
}

export interface iShortDataInput {
	title: string
	summary: string
	github: string
	link: string
	showOrder: string
	image?: File
	description?: string
	template?: string
	isHidden: boolean
}

export type UpdatedShortData = Pick<iProject, "title" | "summary" | "image" | "link" | "github" | "description"| "template" | "showOrder" | "isHidden">