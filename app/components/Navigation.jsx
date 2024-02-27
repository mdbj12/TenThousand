import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <nav>
            {/* logo image */}
            <div>
                <Link href='/' draggable='false'>
                    {/* <Image src='/tenthousandlogo.png' alt='logo' draggable='false' width={60} height={60} /> */}
                    <p>10000</p>
                </Link>
            </div>
            {/* nav bar tabs */}
            <div>
                <Link href='../nav_comps/storyboard' draggable='false' >OUR STORY</Link>
                <Link href='../nav_comps/our_coffee_shops' draggable='false' >OUR COFFEE SHOPS</Link>
                <Link href='../nav_comps/faqs' draggable='false' >FAQS</Link>
                <Link href='../nav_comps/path_to_ownership' draggable='false' >PATH TO OWNERSHIP</Link>
            </div>
        </nav>
    )
}