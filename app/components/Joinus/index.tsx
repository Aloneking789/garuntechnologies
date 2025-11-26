
const Join = () => {
    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">JOIN US</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Transform your ideas into <br /> intelligent applications.</h2>
                    <p className="text-lightblack text-base font-normal">Ready to build the next big thing? Contact Garun Technologies today and let&apos;s discuss how we can <br /> bring your vision to life with AI-powered solutions and cutting-edge technology.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <form action="https://api.web3forms.com/submit" method="POST" className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <input type="hidden" name="access_key" value="4b268876-24f7-4a5c-80a8-b51f8a9a1324" />
                        <div>
                            <input type="text" name="name" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" required />
                        </div>
                        <div>
                            <input type="email" name="email" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" required />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Join!
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Join;
