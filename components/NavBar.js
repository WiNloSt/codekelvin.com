export default function NavBar() {
  return (
    <nav>
      <ul className="flex">
        <NavItem>About</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Works</NavItem>
        <NavItem>Gallery</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </nav>
  )
}

function NavItem({ children }) {
  return <li className="pr-4 last:pr-0">{children}</li>
}
