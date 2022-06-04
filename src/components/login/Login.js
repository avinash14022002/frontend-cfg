const Login = () => {
    return (
        <>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
            <div className="flex flex-col h-screen">
                <section className="flex flex-col items-center justify-between px-6 py-4 bg-gray-800 sm:flex-row">
                    <a href="/" className="text-xl font-inter text-white">The Sustainability Mafia</a>
                </section>

                <div className="flex flex-grow py-4">
                    <section className="flex flex-col w-4/5 mx-auto overflow-hidden items-center justify-center rounded-lg md:flex-row md:h-full">
                        <div className="flex flex-col border-2 border-green-100 bg-gray-100 items-center justify-center pb-6 md:py-0 md:w-full md:h-full">
                            <div className="px-4 py-4 md:px-8 md:py-0">
                                <p className="mt-2 text-black text-2xl font-inter md:text-black md:text-4xl">Susmafia Talent Hunt</p>
                            </div>

                            <section className="flex justify-center bg-white w-3/4 border-2 border-green-500 rounded-lg mt-10 py-8 pb-8 md:p-8">
                                <div className="rounded text-center justify-center">
                                    <h2 className="font-inter text-2xl">Login</h2>
                                    <form>
                                        
                                    <div className="flex items-center my-6 mx-1 text-left">
                                        <div className="w-1/3 md:w-1/4">
                                            <label className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3" for="email">
                                                Email
                                            </label>
                                        </div>
                                        <div className="w-2/3 md:w-3/4">
                                            <input className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="email" required/>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6 mx-1 text-left">
                                        <div className="w-1/3 md:w-1/4">
                                            <label className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3" for="password">
                                                Password
                                            </label>
                                        </div>
                                        <div className="w-2/3 md:w-3/4">
                                            <input className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="password" required/>
                                        </div>
                                    </div>

                                    <button className="w-2/3 md:w-full bg-black text-sm font-inter text-white py-2 px-4 rounded-lg" type="submit">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </section>

                            <div className="px-4 py-4 md:px-8 md:py-0">
                                <p className="mt-2 text-black text-sm font-inter md:text-black md:text-1xl">Don't have a account? Register </p>
                            </div>

                        </div>
                    </section>
                </div>

                <section className="text-center px-6 py-4 bg-gray-800 sm:flex-row">
                    <p className="py-2 font-inter text-white sm:py-0">© 2021 by The Sustainability Mafia</p>
                </section>
            </div>
        </>
    );
};

export default Login;