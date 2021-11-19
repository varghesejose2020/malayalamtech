import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Steps } from 'antd';



import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome To Ml Tech.</h1>
   
    
    <StaticImage
      src="../images/3786012.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Experience the speed of Gatsby And Gatsby Cloud</h1>

<h3>പൂതപ്പാട്ട്</h3>
    <p>ആറ്റിന്‍ വക്കത്തെ മാളിക വീട്ടിലന്നാ 
റ്റുനോറ്റിട്ടൊരൊണ്ണി പിറന്നു.. 
ഉണ്ണിക്കരയില് കിങ്ങിണി പൊന്നുകൊണ്ടു 
ണ്ണിക്കു കാതില്‍ കുടക്കടുക്കന്‍ 
പാപ്പ കൊടുക്കുന്നു പാലു കൊടുക്കുന്നു 
പാവ കൊടുക്കുന്നു നങ്ങേലി 
കാച്ചിയ മോരൊഴിച്ചൊപ്പി വടിച്ചിട്ടു 
കാക്കേ പൂച്ചേ പാട്ടുകള്‍ പാടീട്ടു 
മാനത്തമ്പിളി മാമനെ കാട്ടീട്ടു 
മാമുകൊടുക്കുന്നു നങ്ങേലീ.. 
മാമുകൊടുക്കുന്നു നങ്ങേലീ 
താഴേ വച്ചാല്‍ ഉറുമ്പരിച്ചാലോ 
തലയില്‍ വച്ചാല്‍ പേനരിച്ചാലോ 
തങ്കക്കുടത്തിനെ താലോലം പാടീട്ടു 
തങ്കകട്ടിലില്‍ പട്ടുവിരിച്ചിട്ടു 
തണുതണെ പൂന്തുട തട്ടിയുറക്കീട്ടു 
ചാ‍ഞ്ഞുമയങ്ങുന്നു നങ്ങേലി.



</p>
~ഇടശ്ശേരി ഗോവിന്ദൻ നായർ
<p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
