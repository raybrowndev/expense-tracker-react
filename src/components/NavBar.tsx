import React from 'react'

const NavBar = () => {
  return (
    <>
    <aside className="w-72 bg-gray-800 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
      {/* Menu Items */}
      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">Menu</div>

        {/* Home Menu Item */}
        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <a className="bg-white/10 text-white group-hover:bg-white/20 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-sm">
            <svg className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
            </svg>
            <span className="font-QuicksandMedium">Home</span>
          </a>
        </div>

        {/* Discovery Menu Item */}
        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <a className="group-hover:bg-white/20 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-sm">
            <svg className="h-5 w-5 group-hover:fill-red-600 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <path d="M19 2H9c-1.11 0-2 .89-2 2v5.586l-4.707 4.7v0c-.4.39-.4 1.02 0 1.41 .18.18.44.29.7.29v5 0c0 .55.44 1 1 1h16v0c.55 0 1-.45 1-1v-17c0-1.11-.9-2-2-2Zm-8 18H5v-5.586l3-3 3 3V20Zm8 0h-6v-4 0c.55 0 .99-.45 1-1 0-.27-.11-.53-.3-.72L8.99 9.57V3.984h10v16Z"></path>
                <path d="M11 6h2v2h-2Zm4 0h2v2h-2Zm0 4.03h2v1.96h-2Zm0 3.96h2v2h-2Zm-8 1h2v2H7Z"></path>
              </g>
            </svg>
            <span className="font-QuicksandMedium">All Transactions</span>
          </a>
        </div>

        {/* Profile Menu Item */}
        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <a className="group-hover:bg-white/20 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 text-sm">
            <svg className="h-5 w-5 group-hover:fill-red-600 transition-colors duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z"></path>
              <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z"></path>
            </svg>
            <span className="font-QuicksandMedium">Sign out</span>
          </a>
        </div>
      </div>
    </aside>
    </>
  )
}

export default NavBar










