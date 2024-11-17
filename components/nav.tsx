import Link from "next/link"
export default function Nav(){
    return(
        <div>
        <nav>
          <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
          </ul>
        </nav>
      </div>
    )
}