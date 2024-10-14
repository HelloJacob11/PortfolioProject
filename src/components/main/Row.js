import React from "react";

function Row(props){
    return(
        <tr>
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <h2 class="font-medium text-gray-800 dark:text-white ">{props.row0}</h2>
            </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                {props.row1}
            </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div>
                <p class="text-gray-500 dark:text-gray-400">{props.row2}</p>
            </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
                {props.row3}
        </td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                Edit
            </button>
        </td>
     </tr>
    )
        

    
}

export default Row