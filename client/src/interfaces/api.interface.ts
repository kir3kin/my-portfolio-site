import { Method } from "axios";

import { iProject, ShortProjectData } from "./project.interface"
import { ChosensType, Technology } from "./technology.interface";

export interface iProjectsQuery {
	data: { data: { projects: [ShortProjectData] } }
}

export interface iProjectQuery {
	data: { data: { project: iProject } }
}

export interface iTechnologyQuery {
	data: { data: { technologies: [Technology] } }
}

export type AxiosParamsType = {
	url: string,
	method: Method,
	headers: {
		[key: string]: string
	}
}

export type getLocalDataType = (name: string) => ChosensType
export type setLocalStorageDataType = ( name: string, data?: any ) => void