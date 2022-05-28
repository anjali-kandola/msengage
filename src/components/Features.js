import React from 'react'
function Features() {
    return (
        <>
            <div className="bg-sky-200 container px-0 mt-4 py-5 ">
                <h1 className="text-center text-4xl font-bold text-black">Features</h1>
                <p className='text-center text-black my-4' >Loads of features. Making it easier for anyone to predict the car price. Shows analysis done on large data sets.</p>
                <div className='flex justify-center my-20'>
                    <div className="container flex justify-center flex-wrap md:w-10/12 w-12/12">
                        <div className='w-6/12'>
                            <img className='vert-move rounded shadow-2xl w-12/12 md:w-11/12' src="./images/img1.jpeg" alt="" />
                        </div>
                        <div className='md:w-4/12 w-12/12 mt-5'>
                            <h1 className='text-center text-blue-900 text-3xl font-bold'>Available on GitHub <i class="fa-brands fa-github-alt"></i></h1>
                            <p className='text-left mt-5 md:mx-0 mx-4 text-black'>The web page's source code is freely available on GitHub. See the code, modify and use freely. Give us some feedback about this project.</p>
                            <ul className='mt-5 md:mx-0 mx-3'>
                                <li className='font-bold text-xl '><i class="fa-solid fa-check"></i> Clone at <a target="_blank" className='text-blue-900' href="https://github.com/anjali-kandola/msengage">Github</a></li>
                                <li className='font-bold text-xl '><i class="fa-solid fa-check"></i> Do changes, Give feedback</li>
                                <li className='font-bold text-xl '><i class="fa-solid fa-check"></i> Clone it and try !</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <div className="container flex justify-center flex-wrap md:w-10/12 w-12/12">
                        <div className='md:w-4/12 w-12/12 mt-5'>
                            <h1 className='md:text-left text-center text-blue-900 text-3xl font-bold'>Analysis Data Set and Code Available <i class="fa-solid fa-database"></i></h1>
                            <p className='text-left mt-5 md:mx-0 mx-3  text-black'>Data set on which the analysis is done is available. Also, the code used for analysing the data and get prediction rates is made available.</p>
                            <ul className='mt-5 md:mx-0 mx-3'>
                                <li className='font-bold text-xl '><i class="fa-solid fa-check"></i> Clone at <a target="_blank" className='text-blue-900' href="https://github.com/anjali-kandola/msengage">Github</a></li>
                                <li className='font-bold text-xl '><i class="fa-solid fa-check"></i> Model created code</li>
                            </ul>
                        </div>
                        <div className='w-6/12 mx-5 my-5' >
                            <img className='vert-move rounded shadow-2xl' src="./images/img2.jpeg" width={600} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Features