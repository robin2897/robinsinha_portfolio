import React from 'react'
import { Typography, Paper, ThemeProvider, Grid } from "@material-ui/core";
import { TweenMax, Bounce } from "gsap";

import { customMaterialTheme } from "../../MaterialUiTheme";

import './contact.scss'

export class ContactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.descriptionElement = null;
        this.cardElement = null;
    }

    componentDidMount() {
        document.title = 'Robin Sinha | Contact';

        TweenMax.fromTo(this.descriptionElement, 1.6, {opacity: 0, y: 50}, {opacity: 1, y: 0}).play();
        TweenMax.fromTo(this.cardElement, 1.6, {opacity: 0, y: 50}, {opacity: 1, y: 0, onComplete: cardComplete}).play();

        function cardComplete() {
            TweenMax.fromTo(".contact-social-link-container", 1.5, {transform: 'translateY(100px)', opacity:0}, {ease: Bounce.easeOut, transform: 'translateY(0px)', opacity:1}).play();
        }
    }

    render() {
        var timelineTheme = customMaterialTheme();
        return (
            <section className="contact-landing">
                <div className="contact-container">
                    <div className="contact-content">
                        <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <div className="contact-description" ref={div => this.descriptionElement = div}>
                                    <h1>My Contact Details</h1>
                                </div>
                            </Grid>
                            <Grid item lg={12} container className="contact-me-container">
                                <ThemeProvider theme={timelineTheme}>
                                    <Paper elevation={3} className="contact-timeline-card" ref={div => this.descriptionElement = div}>
                                        <Typography variant="h2" component="h1">
                                            <b>Contact Me</b>
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            <b>Robin Sinha</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <b>Lives in:</b> INDIA
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <b>Email:</b> rsinha126@gmail.com
                                        </Typography>
                                        <Grid container direction="row" spacing={5} justify="center" alignItems="center" className="contact-link-container">
                                            <Grid item className="contact-social-link-container">
                                                <Typography variant="body2" color="textPrimary">
                                                    <a className="contact-social-link" href="https://www.facebook.com/robin2897" target="_blank" rel="noopener noreferrer">
                                                        <i className="fab fa-facebook fa-2x icon-social"></i>
                                                    </a>
                                                </Typography>
                                            </Grid>
                                            <Grid item className="contact-social-link-container">
                                                <Typography variant="body2" color="textSecondary">
                                                    <a className="contact-social-link" href="https://www.linkedin.com/in/rsinha126/" target="_blank" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin fa-2x icon-social"></i>
                                                    </a>
                                                </Typography>
                                            </Grid>
                                            <Grid item className="contact-social-link-container">
                                                <Typography variant="body2" color="textSecondary">
                                                    <a className="contact-social-link" href="mailto:rsinha126@gmail.com">
                                                        <i className="fas fa-envelope fa-2x icon-social"></i>
                                                    </a>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}
