import Link from 'next/link'
import timeAgo from '../lib/time-ago'
import parse from 'url-parse'

const Story = ({ id, title, date, url}: any) => {
  const { host } = parse(url)
  return (
    <div>
      <div className="title">
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link href={'url not found'} legacyBehavior>
            <a>{title}</a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .title {
          font-size: 15px;
          margin-bottom: 3px;
        }

        .title > a {
          color: #000;
          text-decoration: none;
        }

        .title > a:visited {
          color: #828282;
        }

        .meta {
          font-size: 12px;
        }

        .source {
          font-size: 12px;
          display: inline-block;
          margin-left: 5px;
        }

        .source a,
        .meta a {
          color: #828282;
          text-decoration: none;
        }

        .source a:hover,
        .meta a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

const plural = (n, s) => s + (n === 0 || n > 1 ? 's' : '')

export default Story
