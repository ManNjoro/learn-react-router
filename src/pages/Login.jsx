import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin",true)
        const response = redirect("/host")
        response.body = true
        return response
    } catch (err) {
        return err.message
    }
    
}

export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const { state } = useNavigation()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error}</h3>}
            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={state==="submitting"} > {state=== "submitting"?"Logging in...": "Log in"}</button>
            </Form>
        </div>
    )

}