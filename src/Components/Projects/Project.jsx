import React from 'react';
import './projects.scss';
import blockhead from './project-photos/blockhead.png';
import mockdoc from './project-photos/mockdoc.png';
import rdcover from './project-photos/rdcover.png';
import restCountries from './project-photos/rest-countries.png';

const PROJECTS = [
    {
        title: "MockDoc",
        url: "https://www.mockdoc.live",
        image: mockdoc,
        altText: "MockDoc website",
        description: "A single-page web application for booking appointments with doctors.",
        repo: "https://github.com/mjohnson324/MockDoc",
        number: 1
    },
    {
      title: "Blockhead",
      url: "https://www.michael-w-johnson.com/blockhead/",
      image: blockhead,
      altText: "Blockhead puzzle game",
      description: "A navigation puzzle game playable on mobile and desktop.",
      repo: "https://github.com/mjohnson324/blockhead",
      number: 2
    },
    {
      title: "RDCover",
      url: "https://github.com/mjohnson324/RDCover",
      image: rdcover,
      altText: "Ruby Data Cover ORM library",
      description: "A simple Object Relational Mapping library for interfacing with SQL databases.",
      repo: "https://github.com/mjohnson324/RDCover",
      number: 3
    },
    {
      title: "Rest Countries",
      url: "https://www.michael-w-johnson.com/rest-countries/",
      image: restCountries,
      altText: "REST Country data react app",
      description: "A simple interface for viewing data on countries provided by REST Countries.",
      repo: "https://github.com/mjohnson324/rest-countries",
      number: 4
    }
];

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "project1Hidden": false,
            "project2Hidden": true,
            "project3Hidden": true,
            "project4HIdden": true,
        };

        this.isHidden = this.isHidden.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    isHidden(number, type) {
        const hidden = this.state[`project${number}Hidden`];
        if (hidden) {
            if (type === "button") {
                return "hidden-border";
            } else {
                return "hidden";
            }
        } else {
            return "";
        }
    }

    toggleHidden(number) {
        const projectHidden = this.state[`project${number}Hidden`];
        if (projectHidden) {
            return function() {
                this.setState({
                    "project1Hidden": !this.state.project1Hidden,
                    "project2Hidden": !this.state.project2Hidden,
                    "project3Hidden": !this.state.project3Hidden,
                    "project4HIdden": !this.state.project4Hidden,
                });
            };
        }
    }

    render() {
        return(
            <section id="projects" class="light-primary-color">
                <h2 class="secondary-text-color">Projects</h2>
                <span id="project-tabs">
                    {PROJECTS.map(({ number }) => {
                        return(
                            <ProjectButton
                                key={number}
                                number={number}
                                hiddenBorder={this.isHidden(number, "button")}
                                onClick={this.toggleHidden(number)} />
                        );
                    })}
                </span>
                <ul>
                    {PROJECTS.map(data => {
                        return(
                            <Project
                                key={data.number}
                                data={data}
                                hidden={this.isHidden(data.number)} />
                        );
                    })}
                </ul>
            </section>
        );
    }
}

const Project = function(data, hidden) {
    const { title, url, image, altText, description, repo } = data;
    return(
        <li className={`project project-grid ${hidden} default-primary-color`}>
            <h3 className="project-title">{title}</h3>
            <a href={url} className="screenshot-wrapper" target="_blank" rel="noopener noreferrer">
                <img src={image} className="screenshot" alt={altText} />
            </a>
            <p className="project-descriptions">{description}</p>
            <span className="project-links">
                <a href={url} className="button" target="_blank" rel="noopener noreferrer">Live</a>
                <a href={repo} className="button" target="_blank" rel="noopener noreferrer">Repo</a>
            </span>
        </li>
    );
};

const ProjectButton = function(number, hiddenBorder) {
    return(
        <button className={`tab ${hiddenBorder} default-primary-color`}>{number}</button>
    );
};

export default Projects;