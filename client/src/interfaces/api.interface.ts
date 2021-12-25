import { Technology, techType } from "./technology.interface";
import { iProject, ShortProjectData } from "./project.interface"
import { User } from "./auth.interface";


// ====== Projects ======
export interface iProjectsData {
	projects: [ShortProjectData]
}

export interface iProjectData {
	project: iProject
}

export interface iCreateDescData {
	createDescription: { id: string }
}

export interface iCreateInfoData {
	createInfo: { id: string }
}

// ====== Technologies ======
export interface iTechnologiesData {
	technologies: [Technology]
}

export interface iTechTypesData {
	techs: [techType]
}

// ====== Users ======
export interface iUsersData {
	users: [User]
}

// ====== Auth ======
export interface iLoginData {
	login: { token: string }
}

export interface iCheckTokenData {
	checkToken: { isValid: boolean }
}