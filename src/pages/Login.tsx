import { authActions } from "@/app/auth-slice"
import { useAppDispatch } from "@/app/hooks"
import { frontImg } from "@/assets/Icons"
import { users } from "@/common/users"
import { Container, Form, FrontImg } from "@/components/styles/Login.styled"
import { useFormik } from "formik"

interface IAuth {
    username: string,
    password: string
}

const Login = () => {
    const dispatch = useAppDispatch()
    const initialValues: IAuth = { username: '', password: ''}
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            new Promise((resolve, reject) => {
                const authUser = users.find((user) => user.username === values.username)
                console.log(authUser)
                authUser ? 
                resolve(dispatch(authActions.login(authUser))) :
                reject('credenciais inválidas')
            }).catch((error) => alert('credenciais inválidas'))
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
                <input id='password' type='password' value={formik.values.password} onChange={formik.handleChange} />
                <button type="submit">Login</button>
            </Form>
        </Container>
    )

}

export default Login