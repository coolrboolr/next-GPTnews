import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
      <Item href="/newest">reddit world news</Item>
      <Item href="/bbc_world">bbc world news</Item>
      <Item href="/bbc_business">bbc business news</Item>

      <style jsx>{`
        ul {
          list-style-type: none;
        }
      `}</style>
    </ul>
  )
}

const Item = ({ href, children }) => (
  <li>
    <Link href={href} legacyBehavior>
      <a>{children}</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)
