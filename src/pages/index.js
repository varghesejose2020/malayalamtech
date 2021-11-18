import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Steps } from 'antd';



import Layout from "../components/layout"
import Seo from "../components/seo"

// const { Step } = Steps;




// ReactDOM.render(
//   <Steps current={1}>
//     <Step title="Finished" description="This is a description." />
//     <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
//     <Step title="Waiting" description="This is a description." />
//   </Steps>,
//   mountNode,
// );

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome Malayalam Tech.</h1>
   
    
    <StaticImage
      src="../images/3786012.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
