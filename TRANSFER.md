# Transfer Document

This application has been developed on behalf of the researchlab Data Intelligence at Zuyd Hogeschool in The Netherlands.

The application serves as a demonstration of performing Machine Learning completely inside of a browser.
With developing the application, there has been a primary focus on extensibility.

## Screenshots

|Feature Selection|Results
|--|--|
![image](https://user-images.githubusercontent.com/50321538/138300662-75bc148a-5da1-4e9a-8747-04216a1b008e.png)|![image](https://user-images.githubusercontent.com/50321538/138300566-45c06bfa-87c5-46ba-89fb-61c0f5fcef09.png)


## Installation

The application has been using the frontend framework VueJS. For general deployment guidelines please refer to [VueJS's deployment guidelines](https://cli.vuejs.org/guide/deployment.html#general-guidelines)

### Requirements

For cloning this repository it is advised to have git installed on your system. Deploying this application for production purposes requires to have docker installed. For development purposes it is required to have node and npm installed, for building or additionaly serving the application locally.
Using the application requires only a webbrowser. However, tests have only been performed on the latest versions of the most popular browsers (Firefox, Google Chrome, ...).


The first step for eighter purpose is cloning this git repository and changing into the cloned directory.
```bash
git clone https://[].com/bd02-ai-casus
cd bd02-ai-casus
```

### Production

Launch a new docker container as daemon
```bash
docker-compose up -d
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
  It is important to note that a concrete ModelTrainer should atleast include the properties and methods described in the ModelTrainer interface. 
  A ModelTrainer can communicate training results using it's abstract set_results(...) function.

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

When the desired logic has been implemented, make sure the training method is included inside of `src/model_trainers/index.ts`.

# Notes

Some possibly desirable features are currently not completely implemented:
 - It is not possible to export or import a (pre-)trained model.
 - The chosen features are not checked against the conditions specified in a ModelTrainer,
 - It is not possible to split a dataset in a training/testing set for validation,
 - Calculating a score is not generally implemented, but can be manaully implemented inside of a ModelTrainer, using the set_result() function.
