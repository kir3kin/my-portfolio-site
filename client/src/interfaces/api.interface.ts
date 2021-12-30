import { Technology, techType } from "./technology.interface";

import {
	Description,
	iMainProjectData,
	Info,
	iProject,
	ShortProjectData,
	UpdatedShortData
} from "./project.interface"

import { User } from "./auth.interface";


// ====== Projects ======
// basic
export interface iProjectsData { projects: ShortProjectData[] }
export interface iProjectData { project: iProject }

// Create/Remove Project
export interface iCreateProjectData { createProject: iMainProjectData }
export interface iRemoveProjectData { removeProject: { id: string } }

// short data
export interface iUpdatedProjectShortData { updateShortData: UpdatedShortData }
export interface iProjectsMainData { projects: iMainProjectData[] }

// techs
export interface iUpdateTechsData { updateProjectTechs: Technology[] }

// info
export interface iCreateInfoData { createInfo: Info }
export interface iUpdateInfoData { updateInfo: Info }
export interface iDeleteInfoData { deleteInfo: Info }

// desc
export interface iCreateDescData { createDescription: Description }
export interface iUpdateDescData { updateDescription: Description }
export interface iDeleteDescData { deleteDescription: Description }


// ====== Technologies ======
export interface iTechnologiesData { technologies: [Technology] }
export interface iTechTypesData { techs: [techType] }


// ====== Users ======
export interface iUsersData { users: [User] }


// ====== Auth ======
export interface iLoginData { login: { token: string } }
export interface iCheckTokenData { checkToken: { isValid: boolean } }