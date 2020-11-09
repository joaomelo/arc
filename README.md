![publish](https://github.com/joaomelo/arc/workflows/publish/badge.svg?branch=master)

# Arc

ARC is an experimental web app that aims to help individuals, organizations, communities and families to collaboratively organize their work pipeline using an impact driven mindset.

# Core Concepts

The system is built under few concepts streamlined from management methodologies like OKR and Agile.

# Arcs

Are the central place to agregate managed work. An Arc groups any number of people, even one person is a perfect valid Arc setup, around a management environment composed of assets, results and challenges.

Every Arc has a owner which defaults to its creator, editors whom are users with some writing capabilities and members whom could see the whole Arc data, but edit only work items delegated to them.

### Assets

Assets are things the arcwork wants to maximize and represent WHY the work should be done. They are an alternative to goals. The main difference is that while a goal is some sort of scope the arc should achieve in a given date, assets are qualitative or quantitative metrics the arc is always trying to maximize in balance. Assets are a way to collect feedback from the real world and adjust the arc working logic.

### Results

Results represent WHAT work should be done. They are real deliverables or achievements that the arc should reach. Results can stretch through a long period and need a clear declaration of done. They represent the high-level scope to be done.

### Challenges

Challenges are pieces of work carved out from results and represent HOW work should be done. They have clear assigments and completed in a short time frame. Challenges are periodically created and assigned to the arc in small time cycles. They should not be spam for more than one month of planned time.

## Getting Started

The app is still in early stages. I work at it as a solo developer in my spare time after my main job working hours. When a version more suitable to experimenting and contributing is available i will update this file with instructions for installing, deploying and contributing. 

## Developing

Server and client separated apps sitting at the same monorepo. Both use ES6 code and are built to the target runtime with Webpack to make code sharing during development enabled.

At development time the client app is served from webpack-server and not by the server app. This aims to aproximate towards production since the client app can be delivery by specialized hosting services like netfly or firebase hosting. The server app is more like a universal webservice.

## Versioning

I try to use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/joaomelo/arc/tags). 

## Author

[João Melo](https://www.linkedin.com/in/joaomelo81/?locale=en_US)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details