import axios from 'axios'
import { iDBData, iProjects } from '../../interfaces/projects'

const SERVERS = {
	'LOCALHOST': 'http://localhost:3040/api/projects',
	'HTTPS': 'https://188.68.221.195:3043/api/projects',
	'HTTP': 'http://188.68.221.195:3040/api/projects'
}

export const fetchProjects = async () => {
	const dbData = await axios.get(SERVERS['LOCALHOST'])
	return new Promise<{data: iProjects}>(resolve => {
		console.log('dbData:', dbData)
		resolve({data: getStructuredData(dbData.data)})
	})
}

type getStructuredDataType = (data: iDBData[]) => iProjects
export const getStructuredData: getStructuredDataType = data => {
	const projects: iProjects = {}
	data.map(row => {
		projects[row.project_id] = {
			inProgress: !!row['in-progress'],
			active: false,
				mainInfo: {
					title: row.title,
					desc: row.description,
					img: row.image,
					website: row.website,
					github: row.github
			},
			fullDesc: {
				...projects[row.project_id]?.fullDesc,
				[row.desc_id]: {
					title: row.desc_title,
					elements: {
						...projects[row.project_id]?.fullDesc[row.desc_id]?.elements,
						[row.e_id]: {
							desc: row.e_description,
							link: row.link,
							children: JSON.parse(row.children)
						}
					}
				}
			}
		}
	})

	return projects
}