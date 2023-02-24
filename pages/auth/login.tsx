import ExternalLogin from '@/components/client/auth/ExternalLogin';
import LoginCred from '@/components/client/auth/LoginCred';
import MotionContainer from '@/components/common/MotionContainer';
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
	const login = async () => {
		const res = await signIn('credentials', {
			redirect: false,
			username: 'mamun',
			password: 'tkdc@dmin',
			callbackUrl: `${window.location.origin}/das`,
		});
	}
	return (
		<MotionContainer>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="container">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<div className="w-full rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
								<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
									<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
										Sign in to your account
									</h1>
									<div className='space-y-4 md:space-y-6'>
										<LoginCred />
									</div>
								</div>
							</div>
						</div>
						<div>
							<ExternalLogin />
						</div>
					</div>
				</div>
			</section>
		</MotionContainer>

	)
}

export default LoginPage