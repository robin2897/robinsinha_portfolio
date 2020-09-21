import React from 'react'
import './footer.scss'

export class FooterComponent extends React.Component {

    render() {
        return (
            <section className="footer-page">
                <div className="copywrite-container">
                    <div className="copywrite-text">&copy; Robin Sinha {(new Date().getFullYear())}</div>
                </div>
            </section>
        );
    }
}