# Angular Tailwind Starter

A modern Angular application starter template with Tailwind CSS integration, designed for rapid development and clean UI design.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0 with [Tailwind CSS](https://tailwindcss.com/) v3.4.17 integration.

## Features

- **Angular 20.2** - Latest version with enhanced performance and developer experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **Angular Material** - Material Design components for Angular
- **Modern UI** - Clean, responsive design using Tailwind components
- **TypeScript 5.8** - Latest TypeScript support for better development experience
- **Hot Reload** - Fast development with automatic browser refresh

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to `http://localhost:4201/`

The application will automatically reload when you modify source files.

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4201/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Tailwind CSS

This project uses Tailwind CSS for styling. Here's how to use it:

### Using Utility Classes

Simply add Tailwind's utility classes to your HTML elements:

```html
<div class="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow-md">
  This is styled with Tailwind CSS
</div>
```

### Customizing Tailwind

You can customize Tailwind by editing the `tailwind.config.js` file in the project root.

### Documentation

For full documentation on Tailwind CSS, visit [https://tailwindcss.com/docs](https://tailwindcss.com/docs).

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── landing-page/     # Main landing page component
│   │   └── single-page/      # Example single page component
│   ├── app.config.ts         # Application configuration
│   ├── app.routes.ts         # Routing configuration
│   └── app.ts               # Root application component
├── styles.scss              # Global styles
├── main.ts                  # Application bootstrap
└── index.html              # Main HTML template
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Credits

This project was developed with assistance from [GitHub Copilot](https://github.com/features/copilot), an AI pair programming tool that helps developers write better code faster.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
