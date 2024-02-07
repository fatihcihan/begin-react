# Definitions and concepts to know about React before starting the project

This project is a beginner-level React application. The project includes several components: Card, Collapse and App.

## Project Structure

-  **node_modules:** This folder contains the dependencies that are necessary for the project to run and are usually not added to the repo.

-  **public:** This folder usually contains HTML files, favicons, CSS files, images and other static files.

-  **index.html:** This is where the React application will be placed in the DOM. In other words, it works by targeting the div tag whose id is root and the components placed here are displayed in the browser.

-  **src:** This is where the actual code of the application resides. With the help of webpack and babel, all the code we write in src is placed in the files in public and index.html reduces it to the file structure that our browser will understand. 

-  **index.js:** This is one of the basic building blocks of the project and is the entry point. It is also where the content in App.js is rendered

-  **App.js:** The main component, the App component, is located here. Other components are used here.

-  **Collapse.js:** The Collapse component contains a button that opens and closes the content.

-  **Card.js:** The Card component defines the appearance of a card.

-  **.gitignore:** Ensures that Git does not store certain files or folders. This is typically used for files that are not intended to be stored, such as build files, temporary files or sensitive information.

-  **package.json:** It contains the project name, version, dependencies and other important information.

-  **package-lock.json:** A file containing the fixed versions of the package dependencies used in the project and the links between the dependencies. This helps to manage the project's dependencies in a secure and consistent way.

-  **README:** A text file that contains basic information about a project or software package, such as its use, installation, configuration and contributor process.

# Terminology 

-  **React elements:** React elements are one of the smallest building blocks that can be created in a React application. A React element can be a simple HTML tag, a piece of text or a more complex component.

- **React cromponents:** A JavaScript code consisting of a function or a class, this JavaScript code can be used to display HTML on our page using JSX, or it can be used to display interaction with event handler codes (we can think of it as a plug-in).

- **JSX (JavaScript XML):** In its simplest form, we can think of it as adding an HTML-like syntax to classic JavaScript. It is an important tool for defining and creating user interfaces in React.

- **Props:** It provides data flow between components, which are the most basic units of React (from parent to child).