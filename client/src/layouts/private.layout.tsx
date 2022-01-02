import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { checkAuth, saveToken, selectUserInfo } from "@redux/reducers/authSlice"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/LocalStorage.API"

import { AuthPage } from "@pages/AuthPage"

import { Loader } from "@blocs/Loader"
import { LoadingError } from "@blocs/LoadingError"

import '@scss/blocs/Admin/AddItem'
import '@scss/blocs/Admin/Buttons'


export const PrivateLayout: React.FC = () => {
	const dispatch = useAppDispatch()
	const { isAuth, token, status } = useAppSelector(selectUserInfo)

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
		<div className="wrapper wrapper--admin-page">
			<div className="container">
				{status === 'loading' && <Loader />}
				{status === 'failed' && <LoadingError />}
				{status === 'idle' && (
					!isAuth ? <AuthPage /> : <Outlet />
				)}
			</div>
		</div>
	)
}