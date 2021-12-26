import { Technology, techType } from "./technology.interface";

import { Description, Info, iProject, ShortProjectData } from "./project.interface"

import { User } from "./auth.interface";


// ====== Projects ======
export interface iProjectsData { projects: [ShortProjectData] }
export interface iProjectData { project: iProject }


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