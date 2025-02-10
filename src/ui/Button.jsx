import { Link } from "react-router-dom"

function Button({children, to}) {
    return  (
        <Link to={to}><button className="my-4 uppercase text-stone-900 dark:bg-gray-900 dark:text-white">{children}</button></Link>
    )


}

export default Button
