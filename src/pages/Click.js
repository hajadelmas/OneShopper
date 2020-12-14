import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Click extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Copyright" keywords={[`gatsby`, `click`, 'collect', `react`]} />
                <div className="site-click">
                    <div className="container">
                        <div className="row">
                            Intégration logiciel
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Click
