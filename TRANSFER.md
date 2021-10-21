# Transfer Document

This application has been developed on behalf of the researchlab Data Intelligence at Zuyd Hogeschool in The Netherlands.

The application serves as a demonstration of performing Machine Learning completely inside of a browser.
With developing the application, there has been a primary focus on extensibility.

## Screenshots

## Installation

The application has been using the frontend framework VueJS. For general deployment guidelines please refer to (VueJS's deployment guidelines)[https://cli.vuejs.org/guide/deployment.html#general-guidelines].

### Requirements

For cloning this repository it is advised to have git installed on your system. Deploying this application for production purposes it required to have docker installed. For development purposes it required to have node and npm installed, for building or additionaly serving the application locally.
Using the application requires only a webbrowser. However, tests have only been performed on the latest versions of the most popular browsers (Firefox, Google Chrome, ...).



First step for eighter installation is cloning this git repository and changing into the cloned directory.
```bash
git clone https://[].com/bd02-ai-casus
cd bd02-ai-casus
```

### Production

Launch a new docker container
```bash
docker (x)
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

(design choices)

## Extending functionality

One could relatively easily extend the functionality by for example adding a trainingmethod. 
The code for the training methods lives under the `src/training_methods` directory in their corresponding category. All active methods are loaded and defined in the `src/training_methods/index.ts` file. 

When creating a new trainig method, create a new typescript file in under below `src/training_methods` in the corresponding category directory. This file should export a default class extending the abstract class `TrainingMethod` currently defined in `src/composables/types`. 

```ts
import { TrainingMethod } from '@/composables/types'
export default class extends TrainingMethod { /* ... */ }
```

Make sure that this class implements all mandatory properties of `TrainingMethod`.
For a basic example of what a concrete training method could look like, refer to `src/training_methods/supervised/linear_regression.ts`.

When the desired logic has been implemented, make sure the training method is included inside of `src/training_methods/index.ts`.