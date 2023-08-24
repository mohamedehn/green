import React from "react"
import Image from "next/image"

export default function DisplayWorks({title, backgroundImg, url}) {

    return (
        <div className="relative flex items-center justify-center h-[335px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2a5826] to-[#05be14]">
            <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" width="320"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-tight text-center pb-6 font-bold">{title}</h3>
                <a href={url}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">Plus d&#39;informations</p>
                </a>
            </div>
        </div>
    )
  }