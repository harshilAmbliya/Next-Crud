import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl">Next-Crud</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href='/' className="mr-5 hover:text-gray-900">Home </Link>
                        <Link href='/users' className="mr-5 hover:text-gray-900">Users </Link>
                        <Link href='/products' className="mr-5 hover:text-gray-900">Products </Link>
                       
                    </nav>
                    <Link href={'/users/addusers'}>
                    <button className="inline-flex items-center bg-gray-200 border-0 mx-2 py-2 p-7 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Add Users
                    </button>
                    </Link>
                    
                    <Link href={'/products/addproducts'}>
                    <button className="inline-flex items-center bg-gray-200 mx-2 border-0 py-2 p-7 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Add Products
                    </button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header