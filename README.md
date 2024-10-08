# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## TypeScript

- Defining Types

+ Interface :
    +  interface User { 
            name : string;
            id : number;
        } 
        const user : User {
            name : 'komal',
            id : 10
        }
+ Composing Types: With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

    + Union
        type myBoolean = true | false
        A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
        type WindowStates = "open" | "closed" | "minimized";
        type LockStates = "locked" | "unlocked";

    + Generics
        Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
        type StringArray = Array<string>;
        type NumberArray = Array<number>;
        type ObjectWithNameArray = Array<{ name: string }>;

+ Structural Type System

+ Difference between type and interface
![Type vs Interface](image.png)