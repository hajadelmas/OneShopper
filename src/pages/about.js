import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return ( 
            <Layout>
                <SEO title="About" keywords={[`gatsby`, `About`, `react`]} />
                <div className = "site-About">
                    salut    
                </div>
            </Layout>
        )
    }
}
export default About
