# Simple iTunes Clone

## Description
iTunes search preview on top of the iTunes API with react

## Installation
- Clone the repository
- Run `yarn start` to install the dependencies
- Run `yarn dev` to start the application

## Features

Implemented features

Expectations:
- [ ] The app will be composed of a single input for search term, and a single "Go" button to fetch the results.
- [ ] Once the user enters a search term and presses the "Go" button, the app will send a search query to the API, and display the results.
- [x] The results will be displayed in a list.
- [x] The API call will not be made from the view component, but from a separate service class.
- [x] A ReadMe with features included and configurations
- [ ] Be creative and style as you want

Bonus features to implement :
- [x] Reactive Forms - until the user has typed anything in the search box, the "Go" button is disabled.
- [ ] Routing - When a user presses a result, it is directed to a single-result-page component, displaying that results in full screen.
- [x] TypeScript - the results API response will be fully typed with a TypeScript interface.
- [ ] Auto search - if the user has typed something, it will search automatically without having to press "Go"
- [ ] Debouncing for auto-search - if the user has typed something, it will wait 500ms before it will send the API request (assuming the user has not finished typing yet)
