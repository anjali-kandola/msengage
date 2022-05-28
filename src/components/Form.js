import React, { useState } from 'react'
function Form() {
    const [Present_Price, setPresent_price] = useState("");
    const [Kms_Driven, setKms_Driven] = useState("");
    const [Years_old, setYears_old] = useState("");
    const [Transmission_Mannual, setTransmission_Mannual] = useState("");
    const [Owner, SetOwner] = useState("");
    const [Fuel_Type_Diesel, setFuel_Type_Diesel] = useState("");
    const [Fuel_Type_Petrol, setFuel_Type_Petrol] = useState("");
    const [seller_Type_Individual, setsellerType_Individual] = useState("");
    const [display, setdisplay] = useState(false);
    const [alert, setalert] = useState("");
    const onchange = (e) => {
        if (e.target.name === 'Present_Price') {
            setPresent_price(e.target.value)
        }
        else if (e.target.name === "Kms_Driven") {
            setKms_Driven(e.target.value);
        }
        else if (e.target.name === "Years_old") {
            setYears_old(e.target.value)
        }
        else if (e.target.name === "Transmission_Mannual") {
            setTransmission_Mannual(e.target.value)
        }
        else if (e.target.name === "Owner") {
            SetOwner(e.target.value)
        }
        else if (e.target.name === "Fuel_Type_Diesel") {
            setFuel_Type_Diesel(e.target.value)
        }
        else if (e.target.name === "Fuel_Type_Petrol") {
            setFuel_Type_Petrol(e.target.value)
        }
        else if (e.target.name === "seller_Type_Individual") {
            setsellerType_Individual(e.target.value)
        }
    }
    const submit = (e) => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Present_Price, Kms_Driven, Owner, Years_old, Fuel_Type_Diesel, Fuel_Type_Petrol, seller_Type_Individual, Transmission_Mannual })
        };
        fetch("http://127.0.0.1:5000/predict", requestOptions)
            .then(response => response.json())
            .then(data => setalert(data['Output']), setdisplay(true));
    }
    return (
        <>
            <div>
                <h1 className='text-center font-bold text-3xl '>Predict Your Price</h1>
            </div>
            <div className="container flex justify-center px-0 mx-0 my-5">
                <div className='md:w-7/12 w-10/12 '>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={onchange} type="text" id="Present_Price" name="Present_Price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter present price eg. 4.5, 5" required={true} />
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={onchange} type="text" name="Kms_Driven" id="Kms_Driven" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter total KM driven eg. 50000" required={true} />
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={onchange} type="text" name="Years_old" id="Years_old" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="How old eg. 5" required="" />
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input onChange={onchange} type="text" name="Transmission_Mannual" id="Transmission_Mannual" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Transmission mannual (1 or 0)" required={true} />
                    </div>
                    <div class="grid xl:grid-cols-2 xl:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={onchange} type="text" name="Owner" id="Owner" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Owner (1 or 0)" required={true} />
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={onchange} type="text" name="Fuel_Type_Diesel" id="Fuel_Type_Diesel" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Fuel type diesel (1 or 0)" required={true} />
                        </div>
                    </div>
                    <div class="grid xl:grid-cols-2 xl:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={onchange} type="text" name="Fuel_Type_Petrol" id="Fuel_Type_Petrol" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Fuel type petrol (1 or 0)" required={true} />
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input onChange={onchange} type="text" name="seller_Type_Individual" id="seller_Type_Individual" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="seller_type_individual (1 or 0)" required={true} />
                        </div>
                    </div>
                    <button onClick={submit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predict</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="container w-6/12">
                    {display && <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span class="font-medium">You should sell your car at a price of {alert} lac.</span>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Form