'use client'

import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import AuthButton from '@/components/_Input/AuthButton'
import styles from './AuthLogin.module.css'
import { ButtonGroup } from '@/components/_Input'
import AnchorLink from '@/components/AnchorLink'
import Image from 'next/image'

const AuthLogin = () => {
    const optionsIcon = {
        size: 30,
        color: 'var(--text-primary-color)',
    }

    return (
        <div className={styles.authLogin_container}>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start  min-h-50-screen rounded-xl bg-white ">
                <Image
                    alt="test"
                    src={`/images/banner/wave.png`}
                    style={{
                        backgroundSize: 'center',
                        objectFit: 'cover',
                        opacity: '0.9',
                    }}
                    fill
                />
            </div>
            <div className={styles.authLogin_content}>
                <div className="relative flex flex-col shadow-2xl rounded-lg bg-white w-full">
                    <div className="mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-[var(--text-primary-color)] text-sm font-bold">
                                Sign in with
                            </h6>
                        </div>
                        <ButtonGroup>
                            <AnchorLink
                                href="/api/auth/login"
                                className="btn btn-primary btn-margin"
                                tabIndex={0}
                                testId="navbar-login-desktop"
                            >
                                <AuthButton
                                    network="github"
                                    icon={<BsGithub {...optionsIcon} />}
                                ></AuthButton>
                            </AnchorLink>
                            <AnchorLink
                                href="/api/auth/login"
                                className="btn btn-primary btn-margin"
                                tabIndex={0}
                                testId="navbar-login-desktop"
                            >
                                <AuthButton
                                    network="google"
                                    icon={<BsGoogle {...optionsIcon} />}
                                ></AuthButton>
                            </AnchorLink>
                            <AnchorLink
                                href="/api/auth/login"
                                className="btn btn-primary btn-margin"
                                tabIndex={0}
                                testId="navbar-login-desktop"
                            >
                                <AuthButton
                                    network="facebook"
                                    icon={<BsFacebook {...optionsIcon} />}
                                ></AuthButton>
                            </AnchorLink>
                        </ButtonGroup>
                        <hr className="mt-6 border-b-1 border-blueGray-200" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-[var(--text-primary-color)] text-center mb-3 font-bold">
                            <small>Or sign in with credentials</small>
                        </div>
                        <div className="text-center mt-5">
                            <AnchorLink
                                href="/api/auth/login"
                                className="btn btn-primary btn-margin"
                                tabIndex={0}
                                testId="navbar-login-desktop"
                            >
                                <AuthButton
                                    href="/api/auth/signin/facebook"
                                    // onClick={() => signIn}
                                >
                                    Sign in
                                </AuthButton>
                            </AnchorLink>
                            <AnchorLink
                                href="/api/auth/logout"
                                className="btn btn-primary btn-margin"
                                tabIndex={0}
                                testId="navbar-login-desktop"
                            >
                                <AuthButton
                                // onClick={() => signIn}
                                >
                                    Logout
                                </AuthButton>
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLogin
