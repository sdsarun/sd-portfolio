import { useState } from "react";

export default function GetInTouch() {
  // name, email, message, subject

  function handleSend() {

  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0">
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-60"></div>
      <div className="flex flex-col items-center z-20 absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div>
          <h1 className="text-orange-500 text-3xl font-bold">{"< GET IN TOUCH />"}</h1>
        </div>
        <div className="flex gap-x-10 px-4">
          <div className="">
            <div>
              <h3>FULL NAME</h3>
              <input className="border-b-2 border-gray-400 outline-none" type="text" />
            </div>
            <div>
              <h3>EMAIL ADDRESS</h3>
              <input className="border-b-2 border-gray-400 outline-none" type="email" />
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h3>SUBJECT</h3>
              <input className="border-b-2 border-gray-400 outline-none" type="text" />
            </div>
            <div>
              <h3>MESSAGE</h3>
              <textarea className="h-96 border-b-4 border-gray-400 outline-none" />
            </div>
          </div>
        </div>

        <div>
          <button className="bg-orange-500 text-white px-2 py-1 rounded-lg">Send Message</button>
        </div>
      </div>
    </div>
  )
}