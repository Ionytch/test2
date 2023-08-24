import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (
        <>
            <div>Page not found</div>
            <Link to="/">Go to homepage</Link>
        </>
    )
}