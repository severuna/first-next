import Link from "next/link";
import './TheFooter.css';

const TheFooter = () => {
    return (
        <footer className="footer row">
            <Link href='/' className="header-item">Home</Link>
            <Link href='/blog' className="header-item">Blog</Link>
            <Link href='/about' className="header-item">About</Link>
        </footer>
    )
}

export {TheFooter};
