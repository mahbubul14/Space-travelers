# Space X Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Redux.


> The Space-X Project is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.


## Screenshot
> |Rocket Section|Missions Version|Profile Section|
> |--------------|----------------|---------------|
> |![screenshot](./ScreenShots/Rockets-Section.png)|![screenshot2](./ScreenShots/Missions-Section.png)|![screenshot](./ScreenShots/Profile-Section.png)|

## Brief Demo

> ![screenshot](./ScreenShots/spacetravelers-hub.gif)

This **Single Page App**  was built with **React-Redux**. The main page `(Rocket Page)` has links to:
- Rocket Page
- Missions Page
- Profile Page 

The contents displayed on the Rocket's page are fetched from a [Rocket API](https://api.spacexdata.com/v3/rockets). When a user clicks the _"Reserve rocket"_ button, actions are dispatched to update the store and the reserved rocket shows a _"Reserved"_ badge and "Cancel reservation" button instead of the default "Reserve rocket"


The contents displayed on the Missions' page are fetched from a [Missions API](https://api.spacexdata.com/v3/missions). When a user clicks the _"Join Mission"_ button, actions are dispatched to update the store, the join mission button changes to _"Leave Mission"_ and the corresponding badge for that mission shows _"Active Member"_. On the other hand, when the _"Leave Mission"_ button is clicked, the button changes to _"Join Mission"_ and the corresponding badge shows _"Not A Member"_

The Profile Page displays the Name of All `Reserved Rockets` and the `Joined Missions`.

## Built With

- ### Major languages
  - Javascript, CSS
- ### Frameworks
  - ReactJS, Redux, React-Redux, React Bootstrap
- ### Technologies used
  - Webpack, Babelrc, Linters

## Live Demo Links

🔗 [SpaceX]()

## Getting Started

To get a local copy up and running follow these simple example steps.

```
git clone https://github.com/mahbubul14/Space-travelers.git
```

and then run

```
npm i
npm start
```

## Installation

to build a production version to `bulid` folder run

```
npm run build
```

## Authors
👨 **Mahbubul Alam**

- GitHub: [@mahbubul14](https://github.com/mahbubul14)
- LinkedIn: []()


👨🏿 **Akintoye Damilare**

- GitHub: [@dami1080](https://github.com/dami1080)
- LinkedIn: []()


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mahbubul14/Space-travelers/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to [Microverse](https://www.microverse.org/) for the opprotunity to learn ReactJS and React_Redux using their platform
- The [Rocket API](https://documenter.getpostman.com/view/2025350/RWaEzAiG) was used to retrieve data that was displayed in both the Rockets and Mission Section
