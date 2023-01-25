import React from 'react'

function Oneline({data}) {

  return (
    <div>
      <div className="border-t-2 border-gray-500 "></div>
        <div className="flex -mt-4  justify-between">
          <div className="text-black ml-10 bg-white font-bold text-xl w-24 text-center">{data.name}</div>

          <div className="rounded-full border-2 border-gray-300 mr-10  bg-gray-100 w-24 text-center flex justify-around gap-1">
            <div className="text-black cursor-pointer">और पढ़ें </div>
            <div className="w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                viewBox="0 0 48 48"
              >
                <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
              </svg>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Oneline
