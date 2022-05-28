import React from 'react'

function Cards() {
    return (
        <>
            <div className="container flex justify-center  mb-6 flex-wrap ">
                <div class="card p-6 max-w-lg mb-5 mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price prediction</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Price prediction uses an algorithm to analyze a product or service based on its characteristics, demand, and current market trends.</p>
                </div>
                <div class="card p-6 max-w-lg mb-5 mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data analytics</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Data analytics  is the process of examining data sets in order to find trends and draw conclusions about the information they contain.</p>
                </div>
            </div>
        </>
    )
}

export default Cards