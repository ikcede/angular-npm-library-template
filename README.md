# Angular NPM Package Template

A template for creating Angular NPM packages.

# Set up

To set up the development environment and ng-packagr, first run:

```sh
npm install
```

You can test your package locally by running:

```sh
npm start
```

This will automatically compile the package and link it to a demo app.
There is also a workflow in place that will let you automatically deploy the
demo to github pages.

To publish the package to npm, run:

```sh
npm publish
```

To dry-run npm publish, run:

```sh
npm run publish:dry-run
```

## TODO List

- [ ] Rename package/your-package-name
- [ ] Update package.json name, dependencies, and scripts with your package name
- [ ] Update package/your-package-name/package.json fields
- [ ] Update package/your-package-name/README.md with details for the NPM page
- [ ] Update LICENSEs with your name

# Template for README

## Installation

```sh
npm install your-package-name --save
```

## Usage

TODO: Add usage instructions.

# Development

## Testing

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
# Testing for angular-auto-content-id package:
ng test package

# Testing for demo:
ng test demo
```

## Development server

To start a local development server, run:

```bash
npm start
```

This will automatically compile the package and link it to demo before serving demo.

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files, but you will need to
restart the server if you make changes to the package code.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
