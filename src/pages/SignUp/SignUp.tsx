import React, { useState } from 'react'
import { Input, Button, CloseButton } from '@mantine/core'
import { LuAtSign } from 'react-icons/lu'
import { CiMail } from 'react-icons/ci'
import styles from './signup.module.scss'

interface UserData {
	name: string
	nickname: string
	email: string
	password: string
	confirmPassword: string
}

export const SignUp: React.FC = () => {
	const [userData, setUserData] = useState<UserData>({
		name: '',
		nickname: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		inputField: keyof UserData
	) => {
		setUserData({ ...userData, [inputField]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setUserData({
			name: '',
			nickname: '',
			email: '',
			password: '',
			confirmPassword: ''
		})
	}

	return (
		<div className={styles.cover}>
			<div className={styles.signin}>
				<form onSubmit={handleSubmit}>
					<Input.Wrapper
						label='Enter your name'
						required
						size='md'
						className={styles.labelMargin}
					>
						<Input
							type='text'
							placeholder='John'
							value={userData.name}
							onChange={e => handleChange(e, 'name')}
							rightSectionPointerEvents='all'
							rightSection={
								<CloseButton
									aria-label='Clear input'
									onClick={() => setUserData({ ...userData, name: '' })}
									style={{ display: userData.name ? 'block' : 'none' }}
								/>
							}
						/>
					</Input.Wrapper>
					<Input.Wrapper
						label='Your nickname'
						required
						size='md'
						className={styles.labelMargin}
					>
						<Input
							type='text'
							placeholder='Johny Silverhand'
							value={userData.nickname}
							onChange={e => handleChange(e, 'nickname')}
							leftSection={<LuAtSign size={16} />}
							rightSectionPointerEvents='all'
							rightSection={
								<CloseButton
									aria-label='Clear input'
									onClick={() => setUserData({ ...userData, nickname: '' })}
									style={{ display: userData.nickname ? 'block' : 'none' }}
								/>
							}
						/>
					</Input.Wrapper>
					<Input.Wrapper
						label='Your e-mail'
						required
						size='md'
						className={styles.labelMargin}
					>
						<Input
							type='email'
							placeholder='gorillaz@gmail.com'
							value={userData.email}
							onChange={e => handleChange(e, 'email')}
							leftSection={<CiMail size={16} />}
							rightSectionPointerEvents='all'
							rightSection={
								<CloseButton
									aria-label='Clear input'
									onClick={() => setUserData({ ...userData, email: '' })}
									style={{ display: userData.email ? 'block' : 'none' }}
								/>
							}
						/>
					</Input.Wrapper>
					<Input.Wrapper
						label='Your password'
						required
						size='md'
						className={styles.labelMargin}
					>
						<Input
							type='password'
							placeholder='••••••••'
							value={userData.password}
							onChange={e => handleChange(e, 'password')}
							rightSectionPointerEvents='all'
							rightSection={
								<CloseButton
									aria-label='Clear input'
									onClick={() => setUserData({ ...userData, password: '' })}
									style={{ display: userData.password ? 'block' : 'none' }}
								/>
							}
						/>
					</Input.Wrapper>
					<Input.Wrapper
						label='Confirm your password'
						required
						size='md'
						className={styles.labelMargin}
					>
						<Input
							type='password'
							placeholder='••••••••'
							value={userData.confirmPassword}
							onChange={e => handleChange(e, 'confirmPassword')}
							rightSectionPointerEvents='all'
							rightSection={
								<CloseButton
									aria-label='Clear input'
									onClick={() =>
										setUserData({ ...userData, confirmPassword: '' })
									}
									style={{
										display: userData.confirmPassword ? 'block' : 'none'
									}}
								/>
							}
						/>
					</Input.Wrapper>
					<Button size='sm' type='submit'>
						Sign Up
					</Button>
				</form>
			</div>
		</div>
	)
}
