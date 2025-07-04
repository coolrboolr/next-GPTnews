import Header from './header'
import Meta from './meta'

const Page = ({ children }) => (
  <div className="main">
    <Meta />
    <Header />

    <div className="page">{children}</div>

    <style jsx>{`
      .main {
        width: 85%;
        margin: auto;
        padding: 10px 0 0 0;
      }

      .page {
        color: #CBCEB3;
        background: #fff;
        padding: 3px 10px;
      }

      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)

export default Page
