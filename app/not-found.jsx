"use client"
import dynamic from "next/dynamic";
import { Navbar } from "./components/Navbar";

export const metadata = {
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


const NotFound = () => {

    return (
        <>
        <Navbar />     
            <div className="bg-slate-300 rounded p-8 lg:max-w-[50%] mx-auto flex items-center flex-col mt-[100px] my-auto">
                <p className="text-center text-3xl font-bold uppercase mb-8 text-main">
                    UNLESS YOU HAVE A TIME MACHINE THIS PAGE DOESN&#39;T EXISTS. 404
                </p>
                <a
                onClick={() => (window.location.href = '/')}
                className="flex w-fit items-center gap-2 rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-black/80 focus:outline-none"
                >
                Back to home
                </a>
            </div>     
        </>
    );
};

export default dynamic(() => Promise.resolve(NotFound), {
    ssr: false,
  })