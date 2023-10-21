function Login() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-4">
                <h2 className="mb-4 font-bold text-2xl">Sign In to X</h2>
                <form className="flex flex-col" action="">
                    <input className="mb-4 rounded-md p-2 text-black" type="text" name="username" id = "username" placeholder="Username" />
                    <input className="mb-4 rounded-md p-2 text-black" type="password" name="password" id="password" placeholder="Password" />
                    <button className="bg-sky-500 py-2 px-4 rounded-full">Sing in</button>
                </form>
            </div>            
        </div>
    )
}

export default Login;