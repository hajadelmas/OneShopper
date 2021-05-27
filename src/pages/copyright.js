import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Copyright extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="click & collect" keywords={[`click`, `collect`, `churrasco`]} />
                <div className="site-About">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Copyright</h2>
                                <p>© 2020 Le Churrasco. Tous droits réservés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Copyright
