import Link from "next/link";
import './TheHeader.css';

const TheHeader = () => {
    return (
        <header className="header row">
            <Link href='/' className="header-item">Home</Link>
            <Link href='/blog' className="header-item">Blog</Link>
            <Link href='/about' className="header-item">About</Link>
        </header>
    )
}

export {TheHeader};