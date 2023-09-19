export default function Pw(){
    return(
        <div>
            {/* navbar start from here */}
            <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center
            px-4 md:px-8 sticky top-0">
                <div className="text-2xl text-indigo-700 font-bold">
                    PW Skills
                </div>

                <ul className=" list-none md:flex font-semibold hidden">
                    <li className="mx-[10px] cursor-pointer"><a href="">Home</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="">Abut Us</a></li>
                    <li className="mx-[10px] cursor-pointer"><a href="">Contact Us</a></li>
                </ul>

                <div>
                <button className="hidden md:block p-2 bg-blue-700 rounded-md text-white cursor-pointer"><a href="">Login/SignUp</a></button>
                <button className="md:hidden"><a className="text-4xl" href="#">&#8801;</a></button>

                </div>
            </nav>

            {/* navbar end here */}

            {/* image section start here */}
            <header className="w-full h-auto">
                <img className="w-full hidden md:block" src="https://www.pw.live/files/repository001/website-banners/1694419623-skills_pew%20sign%20up%20web.-01%20%285%29.jpg" alt="" />
                <img className=" w-full md:hidden" src="https://www.pw.live/files/repository001/website-banners/1694419623-skills_pew%20sign%20up%20web.-01%20%285%29.jpg" alt="" />
            </header>
            {/* image section end here */}

            {/* our student section start */}

            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                <div className="w-full h-auto flex flex-wrap flex-col items-center">
                    <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">"Pure Hardwork, No ShortCuts"</p>
                    <div className="w-32 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                </div>
                {/* card */}
                <div className="w-full flex flex-wrap justify-evenly"> 
                    <div className="w-46 flex flex-col items-center mb-12 border-2 border-white rounded-xl ">
                        <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                        <p className="text-3xl font-bold text-white">600+</p>
                        <p className="text-3xl font-bold text-gray-500">Different Courses</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12  border-2 border-white rounded-xl">
                    <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                        <p className="text-3xl font-bold text-white">700,000+</p>
                        <p className="text-3xl font-bold text-gray-500">Student Enrolled</p>
                    </div>

                    <div className="w-46 flex flex-col items-center mb-12  border-2 border-white rounded-xl ">
                    <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                        <p className="text-3xl font-bold text-white">10,000+</p>
                        <p className="text-3xl font-bold text-gray-500">Successfull Transition</p>
                    </div>
      
                </div> 

                </div>
                {/* student end */}

                {/* our product start */}

                <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                    <div className=" w-full h-auto flex flex-wrap flex-col items-center">
                        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products</p>
                        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>

                    </div>
                    {/* card */}
                    <div className="w-[90%] h-auto flex flex-wrap justify-evenly "> 
                        <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                            <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                            <p className="text-3xl font-bold text-white">PW Skills Lab</p>
                            <p className="text-xl font-light text-gray-500">Supercharge your project development with our robust lab.</p>
                        </div>
                        <div className="w-64 flex flex-col items-center mb-12 border-slate-600 border-2 rounded-xl p-2">
                            <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                            <p className="text-3xl font-bold text-white">Job Portal</p>
                            <p className="text-xl font-light text-gray-500">Use exceptional templates for a stand-out resume minus the sign up process</p>
                        </div>
                        <div className="w-64 flex flex-col items-center mb-12 border-slate-600 border-2 rounded-xl p-2">
                            <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                            <p className="text-3xl font-bold text-white">Experiance Portal</p>
                            <p className="text-xl font-light text-gray-500">PW Skills's self-placed experiance portal priorities hands-on training with 570+ internship projects</p>
                        </div>
                        <div className="w-64 flex flex-col items-center mb-12 border-slate-600 border-2 rounded-xl p-2">
                            <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                            <p className="text-3xl font-bold text-white">Become a Affliate</p>
                            <p className="text-xl font-light text-gray-500">Explore affliate marketing opportunities with PW Skills and attain finincial freedom.</p>
                        </div>
                        <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                            <img className="w-44 h-44" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37732/preview.svg" alt="" />
                            <p className="text-3xl font-bold text-white">Hall of fame</p>
                            <p className="text-xl font-light text-gray-500">Our student placements and 100K+ career transition speak volumes about our courses.</p>
                        </div>
                    

                    </div>
                    
                </div>
                {/* product end */}
                {/* footer start from here */}

                <footer className="w-full h-auto bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row justify-between md:px-12 ">
                    <div className="mb-2">
                        <img className="w-42  h-16"  src="https://media.licdn.com/dms/image/C4D16AQHxUxtI0R1M0A/profile-displaybackgroundimage-shrink_200_800/0/1655272916771?e=2147483647&v=beta&t=9vinvOgEio-sbBfooxwm__COB1aA0bPaogW_yxj4rRA" alt="" />
                        <p  className="my-4"><a href="mailto: abc@example.com">Baljitsingh692002@gmail.com</a></p>
                        <img className="w-16 h-16 " src="https://img.freepik.com/premium-vector/iso-9001-2015-certification-iso-90012015-logo-iso-9000-certification_526569-648.jpg" alt="" />
                    </div>
                    <div className="mb-2">
                        <h2 className="font-bold text-xl mt-4">PW Skills</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                        <p>About Us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2 className="font-bold text-xl mt-4">Products</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                        <p>PW Skills Lab</p>
                        <p>Job Portal</p>
                        <p>Experiance Portal</p>
                        <p>Become an affliate</p>
                        <p>Hall of fame</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2 className="font-bold text-xl mt-4">Links</h2>
                        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                        <p>Discord Channel</p>
                        <p>PW YouTube</p>
                        <p>Career</p>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                </footer>



        </div>
    )
}