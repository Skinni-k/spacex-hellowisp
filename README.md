# SpaceX

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> Find the application explanation [here](https://drive.google.com/file/d/1vBCnvG17KQNhknnX33RhellfKqYP0g3c/view?usp=sharing)

> Find the folder structure explanation [here](https://drive.google.com/file/d/1lxYA3Jw2RCz99k4dkNNj22mAgZKqFt3Y/view?usp=sharing)

## Installation

```
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches integration and unit tests (w/ Jest & React Testing Library)

### `yarn cypress:open`

Launches e2e tests with Cypress

## Technical stack

- TypeScript
- Redux + Redux-saga for state management
- Jest + React Testing Library for integration and unit tests
- Cypress.io for e2e testing
- Material-UI
- eslint + prettier for linting ([.eslintrc.js](/.eslintrc.js), [.prettierrc.js](/.prettierrc.js))

## Codebase structure

The structure is pretty much self-explanatory. Names of the folder tells you what part goes in there.
Integration and unit tests are located in the same folder as source files

E2E tests are located in `cypress/integration` folder because with cypress+typescript it is much easier that way and
this is the recommended approach by cypress

- **src/assets** contains all the images/svgs
- **src/components** contains all reusable components and containers. Every component folder has the component file named as `index.tsx` and a folder `__tests__` which contains tests for that individual component.
- **src/redux** folder contains everything related to the redux store, each reducer and saga has tests in the dedicated `__tests__` folder
- **src/pages** contains the pages of the application
- **src/types** contains types for various data objects
