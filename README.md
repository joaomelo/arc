![publish](https://github.com/joaomelo/arc/workflows/publish/badge.svg?branch=master)

THIS APP IS IN IT EARLY DEVELOPMENT AND THE README FILE DECLARES FEATURES YET (OR NEVER) TO BE DEVELOPED. FOR THE TIME BEING, DO NOT CONSIDER IT AS SOURCE OF VALID DOCUMENTATION.

# Arc

ARC is an experimental web app that aims to help individuals, organizations, communities and families to collaboratively organize their work pipeline using an impact driven mindset.

# Core Concepts

The system is built under few concepts streamlined from management methodologies like OKR and Agile.

# Teams

Are the central places for the whole app. It groups any number of people, even one person is a perfect valid team setup, around a management environment with challenges and other work related items.

Every team has at least one admin which defaults to the item creator, editors whom are users with limited data editing capabilities and members whom could see team data and edit data in work item delegated to them.

### Assets

Assets are things the teamwork wants to maximize and represent WHY the work should be done. They are an alternative to goals. The main difference is that while a goal is some sort of scope the team should achieve in a given date, assets are qualitative or quantitative metrics the team is always trying to maximize in balance. Assets are a way to collect feedback from the real world and adjust the team working logic.

### Results

Results represent WHAT work should be done. They are real deliverables or achievements that the team should reach. Results can stretch through a long period and need a clear declaration of done. They represent the high-level scope to be done.

### Challenges

Challenges are pieces of work carved out from results and represent HOW work should be done. They have clear assigments and completed in a short time frame. Challenges are periodically created and assigned to the team in small time cycles. They should not be spam for more than one month of planned time.

## Getting Started

The app is still in early stages and even an alfa version is probably months away. I work at it as a solo developer in my spare time after my main job working hours. When a version more suitable to experimenting and contributing is available i will update this file with instructions for installing, deploying and contributing.

## Built With

ARC is a Single Page Application developed with these main technologies

* [Vue](https://vuejs.org/) - The Progressive JavaScript Framework
* [Bootstrap](https://getbootstrap.com/) - The world’s most popular front-end component library
* [Firebase](https://firebase.google.com/) - A comprehensive app development platform
* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework
* [Webpack](https://webpack.js.org/) - JavaScript module bundler

I also am helped by a lot of packages from the vibrating javascript community. All of them can be checked in the [package.json](package.json) file.

# Decentralized Architecture 

Clients are self sufficient apps that saves all data locally, they synchronize teams information in peer based connections using WebRTC.

How to run locally without internet. The server should just release app version and metadata to wich other version it is able to talk to.

_How to establish identity?_

# Client

The client is a full off-line capable app

----
There is the team.
There are challenges developed inside teams.

What is the local data technology?
How to abstract it?
Should the database deal with synchronization or there to much business and that is another module?
Should i use pouchDB or couchDb? HotCollection can be a data store abstraction?
---

---
There is a point to login locally? Should i have a server just to login?
 

## Versioning

I try to use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/joaomelo/arc/tags). 

## Author

[João Melo](https://www.linkedin.com/in/joaomelo81/?locale=en_US)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details