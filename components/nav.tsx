import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
      <Item href="/newest">new</Item>
      <Item href="/reddit_world">reddit world</Item>
      <Item href="/bbc_world">bbc world</Item>
      <Item href="/bbc_business">bbc business</Item>

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
        color: #092B34;
      }

      a:hover {
        color: #FEF5D6;
      }
    `}</style>
  </li>
)
