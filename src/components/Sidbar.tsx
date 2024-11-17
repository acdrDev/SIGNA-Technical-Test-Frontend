'use client'
import { usePathname } from "next/navigation"
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname()
  
  return (
    <div className="flex flex-col items-center w-56 h-screen overflow-hidden text-gray-700 shadow-2xl">
      <a className="flex items-center w-full px-3 mt-3" href="#">
        <img src="https://ui-avatars.com/api/?background=ef4444&color=ffffff&name=John+Doe" alt="" width={40} className="rounded-3xl" />
        <span className="ml-2 text-sm font-bold">The App</span>
      </a>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3">
          <p className="ml-2 text-sm text-gray-400 font-medium flex items-center w-full h-12 px-3 mt-2 border-t border-gray-300">Dashboard</p>
          <Link
            className={"flex items-center w-full h-12 px-6 rounded " + (pathname == '/panel' ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white')}
            href="/panel"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Panel</span>
          </Link>
          <p className="ml-2 text-sm text-gray-400 font-medium flex items-center w-full h-12 px-3 mt-2 border-t border-gray-300" >Servicios</p>
          <Link
            className={"flex items-center w-full h-12 px-6 rounded " + (pathname == '/brands' ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white')}
            href="/brands"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Registro de marca</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
