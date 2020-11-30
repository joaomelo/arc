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

# Getting Started

The app is still in early stages. I work at it as a solo developer in my spare time after my main job working hours. When a version more suitable to experimenting and contributing is available i will update this file with instructions for installing, deploying and contributing. 

# Tech Stack

The main driver is how to get the app out there as early as possible and with least maintenance effort as possible.

## Serverless

Full stack solo development is hard. A project to be sustainable need (among many other things) consistency. So one must provide predicable environment behavior both at development and runtime.

The way to go would be select popular open source projects (e.g. react, mongo and node)and containerize client, server and db with Docker. Then provide orchestration combining stuff like Webpack, Docker Compose and Kubernetes.

At the moment, this is to much to manage alone. The option is to start using Firebase services: Hosting, Auth and Firestore, and with it abstract most of the full stack and devops complexity at the tradeoff of a possible lock-in.

## Vue Ecosystem

All the main front-end framework and libraries are just great. React, Vue, Angular and Svelte do an amazing job bringing ergonomics to the client UI development combining component and declarative approaches.

Vue was chosen to this project mainly for personal preferences regarding it's explicit syntax for things like slots and events. Any of the other the three options would also be great.

Since Vue was the choice, come with it other ecosystem libraries: Vuex, Vue-Router and Vuetify.

# Development 

## Process

The development move by selecting a use case to implement and do the following steps:
- If first of a family, write a  broad view of the use cases in a README inside the business module with focus on entities and flow.
- Review for the specific use case in the same README, if needed.
- Simple components and flow between components are done with mocks.
- Real features are introduced.
- i18n is provided.
- The UI in implemented.


## Architecture

Every module is develop with this mindset: 'How can this module be decoupled so it could be exported as-is to do the same job in another app?'

The purpose is not to be able to do that literarily, but push the code to be maintainable.

Take notice that, it is not to do a generic job to multiple apps with different requirements. Just the same job. The point is not to do a cow factory, just a cow that can live in any farm.

# Versioning

I try to use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/joaomelo/arc/tags). 

# Author

[João Melo](https://www.linkedin.com/in/joaomelo81/?locale=en_US)

# License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details