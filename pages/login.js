import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"

export default function Login(){

    const [show, setShow] = useState(false)

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

    return (
        <div className="input-button">
            <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
            </button>
        </div>
    )
}