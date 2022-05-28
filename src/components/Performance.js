import React from 'react'

function Performance() {
    return (
        <>
            <div className="container px-0 mx-0 my-10 py-10" style={{ backgroundImage: "url('http://datrics.themetags.com/img/cta-bg.svg')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className='flex justify-center flex-wrap'>
                    <div className="container md:w-8/12 w-12/12">
                        <h1 className='text-center md:text-3xl text-2xl  text-white font-bold'>Let's analysis the data</h1>
                        <p className='text-center mt-3 text-xl text-white'>Looks like , you have predicted the price of car based on features you are adding . Now, let's see how these features are favourable by customers .</p>
                    </div>
                    <div className="container md:w-8/12 my-3 w-12/12">
                        <div className="flex justify-center flex-wrap">
                            <a href="http://localhost:8501" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 text-xl dark:focus:ring-blue-800">Data Analysis</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Performance;