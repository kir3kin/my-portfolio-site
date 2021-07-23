import axios from 'axios'
import { iDBData, iProjects } from '../../interfaces/projectsInterface'

export const fetchProjects = async () => {
	const dbData = await axios.get('http://localhost:3042/api/get')
	return new Promise<{data: iProjects}>(resolve => {
		resolve({data: getStructuredData(dbData.data)})
	})
}

type getStructuredDataType = (data: iDBData[]) => iProjects
export const getStructuredData: getStructuredDataType = (data) => {
	const myProjects: iProjects = {}
	data.map(row => {
		myProjects[row.project_id] = {
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
				...myProjects[row.project_id]?.fullDesc,
				[row.desc_id]: {
					title: row.desc_title,
					elements: {
						...myProjects[row.project_id]?.fullDesc[row.desc_id]?.elements,
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

	return myProjects
}