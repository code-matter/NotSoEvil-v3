import { Button, Form, Input } from "antd"
import { useForm } from "antd/lib/form/Form"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UsersService } from "services/users.services"
import { login } from "slices/user.slice"
import { LoginFormData } from "types"
import { Feedback, rules } from "utils/forms"

type ILogin = {}


const Login = (props: ILogin) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { t } = useTranslation()

    const onFinishHandler = async (loginValues: LoginFormData) => {
        try {
            const { user } = await UsersService.login(loginValues.email, loginValues.password);
            if (!user) return
            dispatch(login(user))
            navigate('/')
        } catch (error: any) {
            Feedback.Error('login-failed')
        }
    }
    const [loginForm] = useForm()
    return (
        <div>
            <Form form={loginForm} layout="vertical" onFinish={onFinishHandler}>
                <Form.Item
                    label="Email"
                    name="email"
                // rules={[rules.email, rules.required] as Object[]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                // rules={[rules.password, rules.required] as Object[]}
                >
                    <Input />
                </Form.Item>
                <Button type='primary' htmlType="submit">Go</Button>
            </Form>
        </div>
    )
}

export default Login