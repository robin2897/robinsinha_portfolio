import React from 'react'
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent,
    TimelineConnector, TimelineContent, TimelineDot
} from "@material-ui/lab";
import { Typography, Paper, ThemeProvider, Button, Grid } from "@material-ui/core";
import { TweenMax, Bounce } from "gsap";

import { customMaterialTheme } from "../../MaterialUiTheme";

import './projects.scss'

export class ProjectsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.descriptionElement = null;
        this.timelineElement = null;
    }

    componentDidMount() {
        TweenMax.from(this.descriptionElement, 1.6, {x: -2000, opacity:0}).play();
        TweenMax.from(this.timelineElement, 1.6, {x: 2000, opacity:0, onComplete: timelineComplete}).play();
        TweenMax.fromTo(".phone-project-timeline-card", 1.5, {transform: 'translateY(100px)', opacity:0}, {ease: Bounce.easeOut, transform: 'translateY(0px)', opacity:1}).play();

        function timelineComplete() {
            TweenMax.fromTo(".project-timeline-card", 1.5, {transform: 'translateY(100px)', opacity:0}, {ease: Bounce.easeOut, transform: 'translateY(0px)', opacity:1}).play();
        }
    }

    render() {
        var timelineTheme = customMaterialTheme();
        return (
            <section className="project-landing">
                <div className="project-container">
                    <div className="project-content">
                        <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <div className="project-description" ref={div => this.descriptionElement = div}>
                                    <h1>My Projects</h1>
                                </div>
                            </Grid>
                            <Grid item lg={12} container className="normal-project-container">
                                <ThemeProvider theme={timelineTheme}>
                                    <Timeline ref={div => this.timelineElement = div}>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>Sep' 2020</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="project-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>My web portfolio</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        I have created this website using following toolkit
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <ul style={{listStyle: 'none'}}>
                                                            <li><i className="fab fa-react"></i> <strong>React.js</strong></li>
                                                            <li><i className="fab fa-js"></i> <strong>JavaScript Language</strong></li>
                                                            <li><i className="fab fa-js"></i> <strong>GreenSock Animation Library</strong></li>
                                                            <li><i className="fab fa-sass"></i> <strong>Sass</strong></li>
                                                            <li><i className="fab fa-node"></i> <strong>Node.js</strong></li>
                                                        </ul>
                                                    </Typography>
                                                    <div className="certificate-button-container">
                                                        <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/robinsinha_portfolio">
                                                            Source
                                                        </Button>
                                                    </div>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>May' 2020</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="project-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>BrainX</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        Created by our team in to take part in Amihack hackathon organizes by Amity University.
                                                        It is a transfer learning-based project for brain tumour detection along with the flask
                                                        web interface to deploy it on a cloud server.
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <ul style={{listStyle: 'none'}}>
                                                            <li><i className="fab fa-python"></i> <strong>Python Language</strong></li>
                                                            <li><i className="fab fa-python"></i> <strong>Flask Web Framework</strong></li>
                                                            <li><i className="fas fa-brain"></i> <strong>TensorFlow</strong></li>
                                                        </ul>
                                                    </Typography>
                                                    <div className="certificate-button-container">
                                                        <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/brainx">
                                                            Source
                                                        </Button>
                                                    </div>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>May' 2018</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="project-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>Silence Please</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        Silence please is an automated silencing android app based on start time and end time.
                                                        Silence please use flutter to render its UI and kotlin for android native support.
                                                        Features included are SMS Service (when a user calls you repeatedly then app will send
                                                        a message to the caller on behave of you) and White List (when white listed caller calls
                                                        you then app will temporarily goes into the ringing mode so that you can pick up your phone).
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <ul style={{listStyle: 'none'}}>
                                                            <li><i className="fab fa-android"></i> <strong>Android</strong></li>
                                                            <li><i className="fab fa-android"></i> <strong>Flutter</strong></li>
                                                            <li><i className="fab fa-android"></i> <strong>Dart Language</strong></li>
                                                            <li><i className="fab fa-android"></i> <strong>Kotlin Language</strong></li>
                                                        </ul>
                                                    </Typography>
                                                    <div className="certificate-button-container">
                                                        <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/Silence-please">
                                                            Source
                                                        </Button>
                                                    </div>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>May' 2017</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="project-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>Passkey</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        A password manager application for an android written in kotlin which stores the password 
                                                        in encrypted form inside an SQLite database using android architectural components.
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <ul style={{listStyle: 'none'}}>
                                                            <li><i className="fab fa-android"></i> <strong>Android</strong></li>
                                                            <li><i className="fab fa-android"></i> <strong>Kotlin Language</strong></li>
                                                            <li><i className="fas fa-database"></i> <strong>SQLite Database</strong></li>
                                                            <li><i className="fab fa-android"></i> <strong>Android Jetpack Library</strong></li>
                                                        </ul>
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                <Typography variant="body2" color="textSecondary">
                                                    <b>May' 2016</b>
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} className="project-timeline-card">
                                                    <Typography variant="subtitle1" component="h1">
                                                        <b>Stock Manager</b>
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        A java swing based desktop application in which one can save their stock information.
                                                        Based on that software tells how much stock left, when you purchase it, to whom you sold it, and so on just like a stock register.
                                                        MySQL database is used to save data in the backend. 
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        <ul style={{listStyle: 'none'}}>
                                                            <li><i className="fab fa-java"></i> <strong>Java Language</strong></li>
                                                            <li><i className="fab fa-java"></i> <strong>Java Swing</strong></li>
                                                            <li><i className="fas fa-database"></i> <strong>MySQL</strong></li>
                                                        </ul>
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </ThemeProvider>
                            </Grid>
                            <Grid item lg={12} container className="phone-project-container">
                                <ThemeProvider theme={timelineTheme}>
                                    <Paper elevation={3} className="phone-project-timeline-card">
                                        <Typography variant="subtitle1" component="h1">
                                            <b>My web portfolio | 2020</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            I have created this website using following toolkit
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <ul style={{listStyle: 'none'}}>
                                                <li><i className="fab fa-react"></i> <strong>React.js</strong></li>
                                                <li><i className="fab fa-js"></i> <strong>JavaScript Language</strong></li>
                                                <li><i className="fab fa-js"></i> <strong>GreenSock Animation Library</strong></li>
                                                <li><i className="fab fa-sass"></i> <strong>Sass</strong></li>
                                                <li><i className="fab fa-node"></i> <strong>Node.js</strong></li>
                                            </ul>
                                        </Typography>
                                        <div className="certificate-button-container">
                                            <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/robinsinha_portfolio">
                                                Source
                                            </Button>
                                        </div>
                                    </Paper>
                                    <Paper elevation={3} className="phone-project-timeline-card">
                                        <Typography variant="subtitle1" component="h1">
                                            <b>BrainX | 2020</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Created by our team in to take part in Amihack hackathon organizes by Amity University.
                                            It is a transfer learning-based project for brain tumour detection along with the flask
                                            web interface to deploy it on a cloud server.
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <ul style={{listStyle: 'none'}}>
                                                <li><i className="fab fa-python"></i> <strong>Python Language</strong></li>
                                                <li><i className="fab fa-python"></i> <strong>Flask Web Framework</strong></li>
                                                <li><i className="fas fa-brain"></i> <strong>TensorFlow</strong></li>
                                            </ul>
                                        </Typography>
                                        <div className="certificate-button-container">
                                            <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/brainx">
                                                Source
                                            </Button>
                                        </div>
                                    </Paper>
                                    <Paper elevation={3} className="phone-project-timeline-card">
                                        <Typography variant="subtitle1" component="h1">
                                            <b>Silence Please | 2018</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Silence please is an automated silencing android app based on start time and end time.
                                            Silence please use flutter to render its UI and kotlin for android native support.
                                            Features included are SMS Service (when a user calls you repeatedly then app will send
                                            a message to the caller on behave of you) and White List (when white listed caller calls
                                            you then app will temporarily goes into the ringing mode so that you can pick up your phone).
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <ul style={{listStyle: 'none'}}>
                                                <li><i className="fab fa-android"></i> <strong>Android</strong></li>
                                                <li><i className="fab fa-android"></i> <strong>Flutter</strong></li>
                                                <li><i className="fab fa-android"></i> <strong>Dart Language</strong></li>
                                                <li><i className="fab fa-android"></i> <strong>Kotlin Language</strong></li>
                                            </ul>
                                        </Typography>
                                        <div className="certificate-button-container">
                                            <Button target="_blank" className="certificate-button" color="secondary" href="https://github.com/robin2897/Silence-please">
                                                Source
                                            </Button>
                                        </div>
                                    </Paper>
                                    <Paper elevation={3} className="phone-project-timeline-card">
                                        <Typography variant="subtitle1" component="h1">
                                            <b>Passkey | 2017</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            A password manager application for an android written in kotlin which stores the password 
                                            in encrypted form inside an SQLite database using android architectural components.
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <ul style={{listStyle: 'none'}}>
                                                <li><i className="fab fa-android"></i> <strong>Android</strong></li>
                                                <li><i className="fab fa-android"></i> <strong>Kotlin Language</strong></li>
                                                <li><i className="fas fa-database"></i> <strong>SQLite Database</strong></li>
                                                <li><i className="fab fa-android"></i> <strong>Android Jetpack Library</strong></li>
                                            </ul>
                                        </Typography>
                                    </Paper>
                                    <Paper elevation={3} className="phone-project-timeline-card">
                                        <Typography variant="subtitle1" component="h1">
                                            <b>Stock Manager | 2016</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            A java swing based desktop application in which one can save their stock information.
                                            Based on that software tells how much stock left, when you purchase it, to whom you sold it, and so on just like a stock register.
                                            MySQL database is used to save data in the backend.
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <ul style={{listStyle: 'none'}}>
                                                <li><i className="fab fa-java"></i> <strong>Java Language</strong></li>
                                                <li><i className="fab fa-java"></i> <strong>Java Swing</strong></li>
                                                <li><i className="fas fa-database"></i> <strong>MySQL</strong></li>
                                            </ul>
                                        </Typography>
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
