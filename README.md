## mail_client_prototype
Prototype for a mail client

This prototype displays a list of messages and the message text upon selection of a message.

## Notes on the implementation, approaches, frameworks and libraries used

This protoype was developed using the Angular2 framework with TypeScript.
I used angular-cli to generate the project according the Angular2 project best practices (See the last section).

I created the messages module to encapsulate the messages functionality so that it can be reused in other projects. Most of the could could be used with mobile frameworks such as NativeScript and Ionic2 to create cross platform mobile apps.

To format the date and time easily, I used the well known moment.js (http://momentjs.com/) library.

## TODO list for a production ready version

- Make it look beautiful (I did not spend a lot of time of the styling of the application - it has a "minimalistic" design ;) )
- Write tests (All the existing tests were generate by angular-cli)
- Update the endpoint url (For now it only points to the local mockdata JSON file)
- Delete and Mark-As-Read only work locally on the list (Since there is no persistence of the data)
- Implement better error alerts
- Loading bar / spinner / icon while loading date from the backend needs to be added
- Consider integrating a UI-library to make the developing of UI components simpler e.g. React (https://www.npmjs.com/package/angular2-react) or Angular Material (https://github.com/angular/material2)

Below are some notes with regards to angular2-cli and how to run the app locally

## Angular2-cli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


