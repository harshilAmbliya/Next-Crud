import React from 'react'

const users = () => {
  return (
    <div>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 text-center uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Password
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone no
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white  hover:bg-gray-50 text-center">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    1
                </th>
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    Magic
                </th>
                <td className="px-6 py-4">
                    Black@gmail.com
                </td>
                <td className="px-6 py-4">
                    PASSWORDS
                </td>
                <td className="px-6 py-4">
                    7984787422
                </td>
                <td className="px-6 py-4 ">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500">update</button>
                <button type='button' className="text-white red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500">delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default users