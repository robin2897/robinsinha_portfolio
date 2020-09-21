import React from 'react'
import { Link } from "react-router-dom";
import ReactRotatingText from 'react-rotating-text';

import {
    Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent,
    TimelineConnector, TimelineContent, TimelineDot
} from "@material-ui/lab";
import { Typography, Paper, ThemeProvider, Button, Grid } from "@material-ui/core";
import { TweenMax } from "gsap";

import { customMaterialTheme } from "../../MaterialUiTheme";
import './home.scss'

export class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.CertficationSection = this.CertficationSection.bind(this);
        this.LandSection = this.LandSection.bind(this);
        this.SkillsetSection = this.SkillsetSection.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.fixMask = this.fixMask.bind(this);
        this.spotlightEffect = this.spotlightEffect.bind(this);
        
        this.skills = ["a Biotech Student", "a Software Developer", "a Web Developer", "a Researcher", "a Technology Enthusiast",
                       "an AI Enthusiast", "a Gamer"]

        this.sectionFindMePage = null;

        this.spotlightAnimationFrame = null;
        this.timelineTheme = customMaterialTheme();
        this.mouse = {x: -100, y: -100 };
    }

    LandSection() {
        return (
            <div className="container">
                <div>
                    <div id="landing-heading" className="landing-heading">
                        <p>I'm <ReactRotatingText items={this.skills} pause={3000} /></p>
                        <p className="anime-landing">Robin Sinha</p>
                    </div>
                    <div id="landing-sub-heading" className="landing-sub-heading">
                        <p className="anime-landing">
                            An Aspiring Software developer
                        </p>
                    </div>
                    <div id="landing-caption" className="landing-caption">
                        <Link to="/contact" className="landing-contact-button">Contact Me</Link>
                    </div>
                </div>
            </div>
        );
    }

    SkillsetSection() {
        return (
            <div className="skills-container">
                <div className="skills-content">
                    <div className="skills-description">
                        <h1>Skillset</h1>
                        <p>My skillset includes various technology such as web, mobile, backend and more</p>
                    </div>
                </div>
                <div className="skills-content">
                    <div className="skill">
                        <div><i className="fab fa-java fa-2x"></i></div>
                        <div><h4>Java Language</h4></div>
                    </div>
                    <div className="skill">
                        <div><i className="fab fa-python fa-2x"></i></div>
                        <div><h4>Python Language</h4></div>
                    </div>
                    <div className="skill">
                        <div><i className="fab fa-android fa-2x"></i></div>
                        <div><h4>Android Development</h4></div>
                    </div>
                </div>
                <div className="skills-content">
                    <div className="skill">
                        <div><i className="fas fa-database fa-2x"></i></div>
                        <div><h4>SQL</h4></div>
                    </div>
                    <div className="skill">
                        <div><i className="fas fa-brain fa-2x"></i></div>
                        <div><h4>Deep Learning</h4></div>
                    </div>
                    <div className="skill">
                        <div><i className="fas fa-laptop-code fa-2x"></i></div>
                        <div><h4>Web Development</h4></div>
                    </div>
                </div>
            </div>
        );
    }

    CertficationSection() {
        return (
            <div className="certification-container">
                <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
                    <Grid item>
                        <div className="certification-description">
                            <h1>Certification/Badges</h1>
                        </div>
                    </Grid>
                    <Grid item lg={12} container className="normal-certificate-container">
                        <ThemeProvider theme={this.timelineTheme}>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            <b>2020 (Certificates)</b>
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>Java (Basic) Certificate</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: HackerRank</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/certificates/0409641a45c3">
                                                    See certificate
                                                </Button>
                                            </div>
                                        </Paper>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>Python (Basic) Certificate</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: HackerRank</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/certificates/91f04670d30f">
                                                    See certificate
                                                </Button>
                                            </div>
                                        </Paper>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>Ami-Hack Hackathon</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From:  Amity University</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://drive.google.com/file/d/1kGxK4tzskOf_EEa9-K6ww8cc-GDDtGYT/view?usp=sharing">
                                                    See certificate
                                                </Button>
                                            </div>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            <b>2020 (Badges)</b>
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>3 Stars (Silver badge) in Problem Solving Skill</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: HackerRank</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                                    See badge
                                                </Button>
                                            </div>
                                        </Paper>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>5 Stars (Gold badge) in Java Skill</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: HackerRank</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                                    See badge
                                                </Button>
                                            </div>
                                        </Paper>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>5 Stars (Gold badge) in SQL Skill</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: HackerRank</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                                    See badge
                                                </Button>
                                            </div>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            <b>2017 (Certificates)</b>
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className="timeline-card">
                                            <Typography variant="subtitle1" component="h1">
                                                <b>Labyrinth</b>
                                            </Typography>
                                            <Typography variant="subtitle2">From: Amity University</Typography>
                                            <div className="certificate-button-container">
                                                <Button target="_blank" className="certificate-button" color="secondary" href="https://drive.google.com/file/d/1H3vgiXJW2psftri0MUDfyRMjRIhS8z1n/view?usp=sharing">
                                                    See certificate
                                                </Button>
                                            </div>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </ThemeProvider>
                    </Grid>
                    <Grid item lg={12} container className="phone-certificate-container">
                        <ThemeProvider theme={this.timelineTheme}>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>Java (Basic) Certificate | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From: HackerRank</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/certificates/0409641a45c3">
                                        See certificate
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>Python (Basic) Certificate | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From: HackerRank</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/certificates/91f04670d30f">
                                        See certificate
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>Ami-Hack Hackathon | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From:  Amity University</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://drive.google.com/file/d/1kGxK4tzskOf_EEa9-K6ww8cc-GDDtGYT/view?usp=sharing">
                                        See certificate
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>3 Stars (Silver badge) in Problem Solving Skill | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From: HackerRank</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                        See badge
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>5 Stars (Gold badge) in Java Skill | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From: HackerRank</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                        See badge
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>5 Stars (Gold badge) in SQL Skill | 2020</b>
                                </Typography>
                                <Typography variant="subtitle2">From: HackerRank</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://www.hackerrank.com/rsinha126">
                                        See badge
                                    </Button>
                                </div>
                            </Paper>
                            <Paper elevation={3} className="phone-timeline-card">
                                <Typography variant="subtitle1" component="h1">
                                    <b>Labyrinth | 2017</b>
                                </Typography>
                                <Typography variant="subtitle2">From: Amity University</Typography>
                                <div className="certificate-button-container">
                                    <Button target="_blank" className="certificate-button" color="secondary" href="https://drive.google.com/file/d/1H3vgiXJW2psftri0MUDfyRMjRIhS8z1n/view?usp=sharing">
                                        See certificate
                                    </Button>
                                </div>
                            </Paper>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </div>
        );
    }

    FindMePage() {
        var timelineTheme = customMaterialTheme();
        return (
            <div className="findme-container">
                <ThemeProvider theme={timelineTheme}>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item>
                            <div className="findme-description">
                                <h1>Find me</h1>
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Grid container direction="row" spacing={3} justify="center" alignItems="center">
                                        <Grid item>
                                            <Typography variant="body2" color="textSecondary">
                                                <a className="social-link" href="https://www.facebook.com/robin2897" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-facebook fa-2x icon-social"></i>
                                                </a>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                <a className="social-link" href="https://www.facebook.com/robin2897" target="_blank" rel="noopener noreferrer">
                                                    @facebook/robin2897
                                                </a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" spacing={3} justify="center" alignItems="center">
                                        <Grid item>
                                            <Typography variant="body2" color="textSecondary">
                                                <a className="social-link" href="https://www.linkedin.com/in/rsinha126/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin fa-2x icon-social"></i>
                                                </a>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" color="textSecondary">
                                                <a className="social-link" href="https://www.linkedin.com/in/rsinha126/" target="_blank" rel="noopener noreferrer">
                                                    @linkedin/rsinha126
                                                </a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" spacing={3} justify="center" alignItems="center">
                                        <Grid item>
                                            <Typography variant="body2" color="textSecondary">
                                                <a className="social-link" href="mailto:rsinha126@gmail.com">
                                                    <i className="fas fa-envelope fa-2x icon-social"></i>
                                                </a>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                <a className="social-link" href="mailto:rsinha126@gmail.com">
                                                    rsinha126@gmail.com
                                                </a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        );
    }

    fixMask() {
        this.spotlightAnimationFrame = window.requestAnimationFrame(this.fixMask);
        // Create string for -webkit-mask-image CSS attribute
        var strImage = '-webkit-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px,200px 200px, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0.0) 80%, rgba(0, 0, 0, 0.0) 100%)';
        this.sectionFindMePage.style.WebkitMaskImage = strImage;
    }

    touchMove(e) {
        function getMouse(e, canvas) {
            var element = canvas,
                offsetX = 0,
                offsetY = 0,
                mx, my;
            if (element.offsetParent !== undefined) {
                do {
                    offsetX += element.offsetLeft;
                    offsetY += element.offsetTop;
                } while ((element = element.offsetParent));
            }

            mx = e.pageX - offsetX;
            my = e.pageY - offsetY;
            return {
                x: mx,
                y: my
            };
        }

        if (e.touches == null) {
            this.mouse = getMouse(e, this.sectionFindMePage);
        } else {
            var targetEvent = e.touches.item(0);
            this.mouse.x = targetEvent.clientX;
            this.mouse.y = targetEvent.clientY;
        }
        e.preventDefault();
        return false;
    }

    spotlightEffect() {
        this.fixMask();
        if ('ontouchstart' in document.documentElement) {
            // Touch events available, wire to touchStart and touchMove
            this.sectionFindMePage.addEventListener('touchmove', this.touchMove, false);
        } else {
            // Touch events not available, wire to touchMove only
            this.sectionFindMePage.addEventListener('mousemove', this.touchMove, false);
        }
    }

    componentDidMount() {
        document.title = 'Robin Sinha';

        TweenMax.fromTo(".anime-landing", 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1}).play();
        TweenMax.fromTo(".landing-sub-heading", 1.5, {y: 50, opacity: 0}, {y: 0, opacity: 1}).play();

        this.spotlightEffect();
    }

    componentWillUnmount() {
        this.sectionFindMePage.removeEventListener('touchmove', this.touchMove);
        this.sectionFindMePage.removeEventListener('mousemove', this.touchMove);
        window.cancelAnimationFrame(this.spotlightAnimationFrame);
    }

    render() {
        return (
            <div>
                <section className="landing-page">
                    <this.LandSection />
                </section>
                <section className="skills-page">
                    <this.SkillsetSection />
                </section>
                <section className="certification-page">
                    <this.CertficationSection />
                </section>
                <section className="findme-page" ref={div => this.sectionFindMePage = div}>
                    <this.FindMePage />
                </section>
            </div>
        );
    }
}
