import React from "react";
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="https://www.w3schools.com/cssref/css3_pr_flex-direction.asp">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="https://www.w3schools.com/cssref/css3_pr_flex-direction.asp">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="https://www.npmjs.com/package/next">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
