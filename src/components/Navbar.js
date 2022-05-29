import React from 'react'
function Navbar() {
    return (
        <>

            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 sticky top-0 z-10 dark:bg-gray-800">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="https://www.freeiconspng.com/thumbs/analytic-icon/data-analytic-icon-6.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Data Analytics</span>
                    </a>
                    <div class="flex md:order-2">
                        <a href="http://localhost:8501" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to streamlit App</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
