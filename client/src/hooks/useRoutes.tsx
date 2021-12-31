import React, { JSXElementConstructor, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { checkAuth, saveToken, selectUserInfo } from "@redux/reducers/authSlice"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.API"
import { Route } from "react-router-dom"

import { EditProjectPage } from "../pages/Admin/EditProjectPage"


export const useRoutes = (): JSX.Element => {//!!!!! not used
	const dispatch = useAppDispatch()
	const { isAuth, token } = useAppSelector(selectUserInfo)

	useEffect(() => {
		if (!token) {
			const userToken = lsAPI.getStorageData({
				storage: StorageType.USER,
				field: 'token'
			})
			if (userToken && typeof userToken === 'string')
				dispatch(saveToken(userToken))
		}
		
		if (!isAuth) dispatch(checkAuth())
	}, [dispatch])
	
	return (
		<>
			{isAuth && (
				<Route path="/edit-project/:id" element={ <EditProjectPage /> } />
			)}
		</>
	)
}