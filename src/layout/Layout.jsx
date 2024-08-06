import { useState } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {

  const [logoutShow, setLogoutShow] = useState(false)
  const [sidebarShow, setSidebarShow] = useState(false)

  return (
    <>
      {/* Logo dan Logout */}
      <header>
        <div className="flex justify-between py-3 px-7 bg-blue-500">
          <div className="font-medium text-white">Pengelola Database</div>
          <div className="flex items-center ps-5 text-white border-b border-b-white">
            <p className="pb-0.5 me-1">Halo, Admin</p>
            <span onClick={() => setLogoutShow(!logoutShow)} className={`${logoutShow ? 'rotate-90' : ''} material-symbols-rounded font-light cursor-pointer select-none transition-all duration-500`}>
              chevron_right
            </span>
          </div>
        </div>
        {/* Logout button */}
        <div className={`${logoutShow ? 'opacity-100' : 'opacity-0 invisible'} absolute top-12 right-7 z-40 p-2 bg-white border rounded-md shadow-md transition-all duration-500`}>
          <div className="flex flex-col w-36">
            <button className="flex items-center gap-1 py-0.5 px-2.5 font-medium text-red-500 hover:bg-red-50 rounded-md">
              <span className="material-symbols-rounded text-lg">
                logout
              </span>
              <p className="pb-0.5 ps-2">Keluar</p>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`absolute ${sidebarShow ? 'w-60' : 'w-16'} h-screen bg-white border-e shadow-md overflow-hidden transition-all duration-300`}>
        <ul className={`flex flex-col gap-3 justify-center ${sidebarShow ? 'w-60' : 'items-center w-16'}`}>
          <li className={`flex mb-2 py-1.5 ${sidebarShow ? 'px-4' : 'px-0'} text-3xl border-b `}>
            <span className="material-symbols-rounded p-1 text-gray-700 cursor-pointer select-none rounded-md hover:bg-gray-100 active:bg-gray-200" onClick={() => setSidebarShow(!sidebarShow)}>
              menu
            </span>
          </li>
          <li className={`px-2`}>
            <a href="/mobil-data" className={`flex gap-3 items-center py-1.5 px-3 ${location.pathname === '/' ? 'text-blue-500 bg-blue-100' : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'}  rounded-md`}>
              <span className="material-symbols-rounded font-light cursor-pointer select-none">
                diversity_3
              </span>
              <p className={`${sidebarShow ? '' : 'hidden'} font-normal`}>Data Jemaat</p>
            </a>
          </li>
          <li className="px-2">
            <a href="/mobil-data" className={`flex gap-3 items-center py-1.5 px-3 ${location.pathname === '/data-gereja' ? 'text-blue-500 bg-blue-100' : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'} rounded-md`}>
              <span className="material-symbols-rounded font-light cursor-pointer select-none">
                church
              </span>
              <p className={`${sidebarShow ? '' : 'hidden'} font-normal`}>Data Gereja</p>
            </a>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className={`${sidebarShow ? 'ms-60' : 'ms-16'} p-4 transition-all duration-300`}>
        <Outlet />
      </main>
    </>
  )
}