import './meganav';
import Link from 'next/link';

const Meganav = () => (
    <div className="meganav_wrapper">
        <div className="meganav_item">
            <Link href="/">
                <a className="meganav_parent">Home</a>
            </Link>
        </div>
        <div className="meganav_item">
            <Link href="/about">
                <a className="meganav_parent">About</a>
            </Link>
        </div>
    </div>
);

export default Meganav;