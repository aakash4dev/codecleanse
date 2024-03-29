import { useState } from "react";
import Image from "next/image";
import Swal from 'sweetalert2'

export default function Home() {

  const [value, setValue] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  // remove comments
  const RemoveComment = () => {
    let code = value;
    console.log(value);
    let newCode = code.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, "");
    setValue(newCode);

    Toast.fire({
      icon: "success",
      title: "Comments removed"
    });
  };


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 `}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-mono font-bold"
            href="/"
            target="_blank"
            rel="codeCleanse"
          >
            <Image
              src="/favicon/favicon-32x32.png"
              alt="codecleanse"
              width={24}
              height={24}
              priority
            />
            {" "} codeCleanse
          </a>
        </div>



        {/* <button className="relative px-6 py-3 font-bold text-black group">
          <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          <div className="absolute inset-0 w-full h-full border-4 border-black"></div>
          <div className="relative">Remove Comment</div>
        </button> */}
        <div className="flex justify-center">
        <div  onClick={RemoveComment} className="cursor-pointer font-bold inline-block px-12 py-3 text-sm font-medium text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring">
          Remove Comment
        </div>
        </div>

      </div>


      <textarea
        className="w-full h-96 p-8 mt-16  font-mono placeholder-gray-400 bg-transparent border-4 border-dashed border-gray-300 rounded-xl dark:border-neutral-800 dark:placeholder-neutral-400/50 dark:bg-neutral-800/10 lg:h-96 lg:p-12 lg:rounded-2xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste your code here..."
      ></textarea>


      <div className="h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="lg:flex place-items-center gap-2 font-mono mt-4 mb-4">
          In a nutshell, CodeCleanse remove single line {"(//)"} and multiline {"/* */"} comments.
        </div>
      </div>

      <blockquote className="text-2xl font-semibold italic text-center text-grey-700 pb-14 md:pb-0">
        When {" "}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-200 relative inline-block">
          <span className="relative text-red-700">Comments Annoys</span>
        </span>
        {" "}
        in codes, people think about CodeCleanse.
      </blockquote>

    </main>
  );
}
