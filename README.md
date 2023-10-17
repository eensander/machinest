# Machinest

This application has been developed while at and with little to negative support by Zuyd Hogeschool.

The application serves as a demonstration of performing Machine Learning completely inside a web browser.
With developing the application, there has been a primary focus on extensibility.

## Screenshots

|Feature Selection|Results
|--|--|
![image](https://user-images.githubusercontent.com/50321538/138300662-75bc148a-5da1-4e9a-8747-04216a1b008e.png)|![image](https://user-images.githubusercontent.com/50321538/138300566-45c06bfa-87c5-46ba-89fb-61c0f5fcef09.png)


## Installation

The application has been using the frontend framework VueJS. For general deployment guidelines, please refer to [VueJS's deployment guidelines](https://cli.vuejs.org/guide/deployment.html#general-guidelines)

### Requirements

For cloning this repository, it is advised to have git installed on your system. Deploying this application for production purposes requires having docker installed. For development purposes it is required to have node and npm installed, for building or serving the application locally.
Using the application requires only a web browser. However, tests have only been performed on the latest versions of the most popular web browsers (Firefox, Google Chrome, ...).


The first step for both purposes is placing this code repository in a desired file location and changing to this directory. If the code repository is hosted on a git repository, this step would include cloning this repository.
```bash
# git clone https://[git host]/machinest
cd machinest
```

### Production

First, build the docker image using the command below
```bash
docker build -t machinest ./
```

Next, run the built image with the following command. Note that this command will run the server on port 80.
```bash
docker run -p 80:8080 machinest
```

### Development

Install dependencies
```bash
npm install
```

Launch VueJS's built-in development server
```bash
npm run serve
```

## Design


<details>
  <summary>UML representation of training relevant classes</summary>
  This UML diagram is bound closely to the original types and classes used in the implementation in TypeScript. Not all classes, interfaces and types have been included due to its large extent.
  It is important to note that a concrete ModelTrainer should at least include the properties and methods described in the ModelTrainer interface. 
  A ModelTrainer can communicate training results using its abstract set_results(...) function.

  ![image](https://user-images.githubusercontent.com/50321538/138298353-8a91cfab-805a-4e14-8437-54a37ea69ed7.png)
</details>

## Extending functionality

One could relatively easily extend the functionality by for example adding a ModelTrainer. 
The code for the model trainers lives under the `src/model_trainers` directory in their corresponding category directory. All active trainers are loaded and defined in the `src/model_trainers/index.ts` file. 

When creating a new model trainer, create a new typescript file in under below `src/model_trainers` in the corresponding category directory. This file should export a default class extending the one of the following respective abstract classes:
- `ModelTrainer`
  - `SupervisedModelTrainer`
  - `UnsupervisedModelTrainer`
Currently, logic has only been implemented for supervised model trainers. However, logic for other model trainer categories could be implemented in the future.

The outline of the new model trainer file should look something like this:

```ts
import { SupervisedModelTrainer } from '@/composables/useTrainer/modelTrainer.ts'
export default class extends SupervisedModelTrainer { /* ... */ }
```

Make sure that this class implements all mandatory properties of `ModelTrainer`.
For a basic example of what a concrete training method could look like, refer to `src/model_trainers/supervised/linear_regression.ts`.

When the desired logic has been implemented, make sure the training method is included inside `src/model_trainers/index.ts`.

# Notes

## Not implemented

Some possibly desirable features are currently not completely implemented:
 - It is not possible to export or import a (pre-)trained model.
 - The chosen features are not checked against the conditions specified in a ModelTrainer,
 - It is not possible to split a dataset in a training/testing set for validation,
 - Calculating a score is not generally implemented, but can be manually implemented inside a ModelTrainer, using the set_result() function.

Some of the non implemented features are visible throughout the application. When hovering these elements, a message will appear indicating its functionality is not implemented.

gh-pages branch created as described on: https://gist.github.com/cobyism/4730490
