import { authActions } from "@/app/auth-slice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { frontImg, see, unSee } from "@/common/Icons"
import { user, users } from "@/common/users"
import { Container, Form, FrontImg, PassWord } from "@/components/styles/Login.styled"
import axios from "axios"
import { useFormik } from "formik"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

interface IAuth {
    username: string,
    password: string
}

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [wrongPassword, setWrongPassword] = useState<boolean>(false)
    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const initialValues: IAuth = { username: '', password: ''}

    const logUser = (authUser: user) => {
        dispatch(authActions.login(authUser))
        router.push('/Tinder')
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            axios.get('/api/users')
            .then((res) => {
                res.data.find((user: user) => {
                    if (user.username === values.username && user.password === values.password) {
                        logUser(user)
                    } else {
                        setWrongPassword(true)
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })

    return (
        <Container>
            <FrontImg>
                <img src={frontImg.src}/>
            </FrontImg>
            <Form onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input id='username' type='text' value={formik.values.username} onChange={formik.handleChange} />
                <label>Password</label>
                <PassWord>
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        <Image 
                            src={ showPassword ? see.src : unSee.src}
                            alt=''
                            width={20}
                            height={20}
                            />
                    </button>
                    <input id='password' type={ showPassword ? 'text' : 'password' } value={formik.values.password} onChange={formik.handleChange}/>
                </PassWord>
                <button type="submit">Login</button>
                { wrongPassword ? <span>Usuário ou senha incorretos</span> : <span/> }
            </Form>
        </Container>
    )

}

export default Login