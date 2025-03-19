import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo">
            <Link to={'/'}>
                <img src="/logo_desktop.png" alt="Logo" />
            </Link>
        </div>
    )
}