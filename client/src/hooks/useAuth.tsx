import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { checkAuth, saveToken, selectUserInfo } from "@redux/reducers/authSlice"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.API"


export const useAuth = () => {
	const dispatch = useAppDispatch()
	const { isAuth, token, status } = useAppSelector(selectUserInfo)

	useEffect(() => {//!!!!! not used
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

	return { status }
}