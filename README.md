## Project Description

This project provides a clean UI for filtering through items, inspecting the details of any item, and add an item. This uses the API from [COMP3504_Assign2](https://github.com/JarHorner/COMP3504_Assign2).

## How to run project as a PWA (Progressive Web App)

1. run `npm install` to get all the dependencies used in the project.

2. run `npm run build` to builds a production version of the application.

3. run `npx serve -s build` to deploy the application to a static server.

4. run `npm start` to start the application. This will be on [http://localhost:3000](http://localhost:3000)

5. From here you can download the PWA from the right side of the URL bar 

6. you can now run the app, even offline!

## Testing

Once the project has been downloaded, you can run `npm test` to launch the test runner in interactive watch mode to run all 5 tests.

All tests are based on the front-end and test the functions made to call the API from [COMP3504_Assign2](https://github.com/JarHorner/COMP3504_Assign2).

there are:
- 2 tests for showing all items,
- 2 tests for recieving an item by name,
- 1 test for adding an item

