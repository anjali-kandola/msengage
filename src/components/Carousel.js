import React from 'react'
function Carousel(props) {
    return (
        <> <div className={`container-sm  mx-0 pb-20 w-100 py-10 my-0 `}>
            <div class=" grid md:grid-cols-2 ">
                <div className="container md:my-20 my-4 px-4 md:ml-20" style={{ maxWidth: "600px" }}>
                    <div className="container my-4 flex justify-center flex-col mr-10">
                        <h1 className='font-bold text-blue-900 text-4xl mt-2'>Car price prediction with data analysis </h1>
                        <span className={`text-black text-xl mt-5`}> Welcome! You may verify the price of the automobile you're creating here, depending on its characteristics and previous costs. If you're happy with the results, you can go back and look at previous analysis of certain attributes, such as which items are the most popular, and then check the price for any changes in the market.</span>
                    </div>
                </div>
                <div className="container my-2 px-4 flex justify-center">
                    <img style={{ borderRadius: "100px 10px 10px 10px" }} src='http://datrics.themetags.com/img/hero-single-img-3.svg' class="vert-move px-2 object-scale-down h-90 w-90" />
                </div>
            </div>
        </div>

        </>
    )
}

export default Carousel