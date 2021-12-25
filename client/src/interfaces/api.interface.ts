import { Method } from "axios"

import { Technology, techType } from "./technology.interface";
import { iProject, ShortProjectData } from "./project.interface"
import { User } from "./auth.interface";

export interface iProjectsQuery {
	data: { data: { projects: [ShortProjectData] } }
}

export interface iProjectQuery {
	data: { data: { project: iProject } }
}

export interface iTechnologyQuery {
	data: { data: { technologies: [Technology] } }
}
export interface iTechTypesQuery {
	data: { data: { techs: [techType] } }
}

export interface iUsersQuery {
	data: { data: { users: [User] } }
}

export interface iLoginData {
	login: { token: string }
}

export interface iCreateDescData {
	createDescription: { id: string }
}

export interface iCreateInfoData {
	createInfo: { id: string }
}

export interface iCheckTokenData {
	checkToken: { isValid: boolean }
}

export type AxiosParamsType = {
	url: string,
	method: Method,
	headers: {
		[key: string]: string
	}
}
