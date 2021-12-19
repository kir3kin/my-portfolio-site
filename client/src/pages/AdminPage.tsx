import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { checkAuth, selectUserInfo } from "@redux/reducers/authSlice"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.api"

import { Dashboard } from "@components/Admin/Dashboard"
import { Loader } from "@blocs/Loader"

import { AuthPage } from "./AuthPage"

export const AdminPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { isAuth, status } = useAppSelector(selectUserInfo)

	useEffect(() => {
		if (!isAuth) {
			const userToken = lsAPI.getStorageData({
				storage: StorageType.USER,
				field: 'token'
			})

			if (userToken && typeof userToken === 'string')
				dispatch(checkAuth(userToken))
		}
	}, [dispatch])

	// admin/edit-project/id
	// admin/create-project

	return (
		<>
			{status === 'loading' && <Loader />}
			{status === 'failed' && <AuthPage />}
			{status === 'idle' && (
				!isAuth ? <AuthPage /> : <Dashboard />
			)}
		</>
	)

}