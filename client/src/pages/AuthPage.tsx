import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "@redux/hooks"

type authFormType = {
	email: string,
	password: string
}

const defaultForm = {
	email: '',
	password: ''
}

export const AuthPage: React.FC = () => {
	const dispatch = useAppDispatch()
	// const { authError } = useAppSelector(selectAuthError)
	const authError = false

	const [form, setForm] = useState<authFormType>(defaultForm)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('email', form.email)
		formData.append('password', form.password)

		// dispatch(authUser(formData))

	}

	return (
		<section className="auth">
			<form className="auth__form" onSubmit={submitHandler}>
				{authError && (
					<p className="auth__form__alert">{authError}</p>
					// <p className="auth__form__alert">{authError.message}</p>
				)}

				<div className="auth__form__item">
					<input
						type="text"
						name="email"
						id="user-email"
						placeholder="Email"
						value={form.email}
						onChange={changeHandler}
					/>
				</div>
				<div className="auth__form__item">
					<input
						type="password"
						name="password"
						id="user-password"
						placeholder="****"
						value={form.password}
						onChange={changeHandler}
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