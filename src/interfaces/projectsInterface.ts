// db
export interface iDBData {
	project_id: string
	'in-progress': string
	title: string
	description: string
	image: string
	website: string
	github: string
	desc_id: string
	desc_title: string
	e_id: string
	e_description: string
	link: string
	children: string
}
// projects
export interface iProjects {
	[key: string] : iProject
}

export interface iProject {
	inProgress: boolean
	active: boolean
	mainInfo: {
		title: string
		desc: string
		img: string
		website: string
		github: string
	},
	fullDesc: iProjectDesc
}

export interface iProjectDesc {
	[key: string]: {
		title: string
		elements: iProjectDescEl
	}
}

export interface iProjectDescEl {
	[key: string]: {
		desc: string
		link:string
		children: string[]
	}
}