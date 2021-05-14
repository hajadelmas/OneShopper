import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/style.css"

class Click extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Copyright" keywords={[`gatsby`, `click`, 'collect', `react`]} />
                <div className="site-click">
                    <h1>Choisir un restaurant</h1>
                    <div className="click_contain">
                        
                        <div className="button_click"> <a href="https://app.miap.co/?pickup=183">45 - MONTARGIS</a> </div>
                        <div className="button_click">77 - NEMOURS</div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Click
