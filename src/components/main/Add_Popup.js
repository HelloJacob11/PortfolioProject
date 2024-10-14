import React from "react";
const Add_Popup = ({setpopup, col1, col2, hint1, hint2, hint3}) => {
 return (
    <>
    <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div class="">
                <div class='mt-3'>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">{col1}</label>
                    <input type="text" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={hint1} required=""/>
                </div>
                <div class='mt-3'>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">{col2}</label>
                    <input type="text" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={hint2} required=""/>
                </div>
                <div class='mt-3'>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                    <input type="text" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={hint3} required=""/>
                </div>
                <div class='mt-3'>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Period</label>
                    <div class='flex flex-row items-center'>
                        <label for="email" class="text-xs font-medium text-gray-900 block mb-2 dark:text-gray-300">Start Date.</label>
                        <input type="date" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required=""/>
                        
                        <label for="email" class="ml-3 text-xs font-medium text-gray-900 block mb-2 dark:text-gray-300">End Date.</label>
                        <input type="date" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required=""/>

                    </div>
                    
                </div>
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    onClick={()=>setpopup(false)}>
                        Cancel
                    </button>
                    <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Add</button>
                </div>
        </div>
        </div>
    </div>
    </>
 )   
}

export default Add_Popup;