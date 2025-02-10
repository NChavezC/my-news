import { NavLink } from "react-router-dom"

function MenuLink({children, to}) {
    const baseClass = "uppercase text-stone-900 dark:bg-gray-900 dark:text-white"
    return (
        <NavLink to={to} className={({ isActive }) =>
            isActive ? `${baseClass} text-blue-400 font-bolder dark:text-blue-400` : `${baseClass}`
          }>{children}</NavLink>
    )
}

export default MenuLink
