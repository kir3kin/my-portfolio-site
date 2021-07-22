// ===== my projects ===== \\
export interface iProjectElemnts {
	elements: {
		readonly id: number
		desc: string
		link?: string
		children?: string[]
	}[]
}

interface iProjectDesc extends iProjectElemnts {
	readonly id: number
	title: string
}

export interface iOneProject {
	readonly id: number
	inProgress: boolean,
	mainInfo: {
		title: string
		desc: string
		img: string | boolean
		website: string
		github: string
	}
	fullDesc: iProjectDesc[]
}

// ===== about me info ===== \\
export interface iInfoProps {
	info: {
		readonly id: number
		className: string
		title: string
		desc?: string
		link?: string
	}
}



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
	[key: string] : {
		inProgress: boolean
		active: boolean
		mainInfo: {
			title: string
			desc: string
			img: string
			website: string
			github: string
		},
		fullDesc: {
			[key: string]: {
				title: string
				elements: {
					[key: string]: {
						desc: string
						link:string
						children: string[] | null
					}
				}
			}
		}
	}
}