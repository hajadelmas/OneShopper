import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Restaurants extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Restaurants" keywords={[`gatsby`, `restaurants`, `react`]} />
                <div className="site-restaurants">
                    <div className="container">
                        <div className="row">
                            Page des restaurants
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Restaurants