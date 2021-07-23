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