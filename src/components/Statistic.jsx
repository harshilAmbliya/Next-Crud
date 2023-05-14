import React from 'react'
import Image from 'next/image';
const Statistic = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap mx-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
              <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            </div>
            <div className="flex mx-auto justify-evenly">
              <div className="p-4  mx-6">
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4  mx-6">
                <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                <p className="leading-relaxed">products</p>
              </div>
              <div className="p-4 mx-6 ">
                <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                <p className="leading-relaxed">buy & sales</p>
              </div>
            </div>

          </div>
          <div className=" sm:w-1/3  rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Image className="object-cover object-center " height={400} width={450} src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="group users Picture " />

          </div>
        </div>
      </section>
    </div>
  )
}

export default Statistic