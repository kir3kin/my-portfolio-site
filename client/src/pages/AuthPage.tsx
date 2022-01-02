import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { selectUserInfo, userLogin } from "@redux/reducers/authSlice"

import { iLoginInput } from "@interfaces/auth.interface"

import '@scss/pages/AuthPage'


export const AuthPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { error } = useAppSelector(selectUserInfo)
	const [form, setForm] = useState<iLoginInput>({ email: '', password: '' })

	// ====== [START:] Handlers ====== \\
	const changeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setForm(prev => ({
			...prev, [e.target.name]: e.target.value
		}))
	}
	
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (form.email && form.password)
		dispatch(userLogin(form))
	}
	// ====== [End:] Handlers ====== \\

	return (
		<section className="auth">
			<form className="auth__form" onSubmit={submitHandler}>
				{error && (
					<p className="auth__form__alert">{error}</p>
				)}
				<div className="auth__form__item">
					<input
						type="email"
						name="email"
						id="user-email"
						placeholder="Email"
						value={form.email}
						onChange={changeHandler}
						required
					/>
				</div>
				<div className="auth__form__item">
					<input
						type="password"
						name="password"
						id="user-password"
						placeholder="Password"
						value={form.password}
						onChange={changeHandler}
						min={4}
						required
					/>
				</div>
				<button
					className="auth__form__button"
					type="submit"
				>Sign in</button>
			</form>
		</section>
	)
}