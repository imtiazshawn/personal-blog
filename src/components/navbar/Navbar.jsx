import React from 'react'
import Link from 'next/link'

// Navlinks
const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 1,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 1,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 1,
    title: 'About',
    url: '/about'
  },
  {
    id: 1,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 1,
    title: 'Dashboard',
    url: '/dashboard'
  },
]

const Navbar = () => {
  return (
    <div>
      <Link href="/">Shawn</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar