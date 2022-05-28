import React from "react";

function Tech() {
  return (
    <>
      <div className="container mx-0 px-0 m-10">
        <h1 className="text-center text-blue-900 text-3xl font-bold">
          What technologies we are used?
        </h1>
        <div className="flex justify-center">
          <p className="text-center md:w-8/12 w-10/12 text-black text-xl ">
            This project is a full stack project, we are using various frontend
            , backend and machine learning algorithms to create such types of
            interactive websites with different types of functionality.
          </p>
        </div>
      </div>
      <div className="container px-0 mx-0 flex justify-center  m-6 flex-wrap ">
        <div class="card p-6 max-w-sm mb-5 mx-2 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <div className="flex justify-center">
            <img
              src="http://datrics.themetags.com/img/consult.svg"
              width={100}
              alt=""
            />z
          </div>
          <p href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center  ">
              Frontend technology
            </h5>
          </p>
          <p class="mb-3 font-normal text-black dark:text-gray-400">
            To make this website we are using react js as a frontend framework
            and tailwind css for creating UI of this website.
          </p>
        </div>
        <div class="card p-6 max-w-sm mb-5 mx-2 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <div className="flex justify-center">
            <img
              src="http://datrics.themetags.com/img/internet-things.svg"
              width={100}
              alt=""
            />
          </div>
          <p href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center ">
              Backend technology
            </h5>
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            For the backend process we are using the flask python framework
            which is used for creating API's.
          </p>
        </div>
        <div class="card p-6 max-w-sm mb-5 mx-2 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <div className="flex justify-center">
            <img
              src="http://datrics.themetags.com/img/data-analytics.svg"
              width={100}
              alt=""
            />
          </div>
          <p href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center ">
              Machine learning algorithm
            </h5>
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This project is a machine learning project so we are using linear
            regression, multiple regression algorithms and a jupyter notebook to
            create models.
          </p>
        </div>
      </div>
    </>
  );
}

export default Tech;
