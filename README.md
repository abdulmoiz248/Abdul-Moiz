## Color Variables

This repository contains a collection of TailwindCSS color variables that can be used to create a consistent and cohesive color palette for your projects.

### Installation

To install the color variables, add the following dependency to your `package.json` file:

```
"dependencies": {
  "color-variables": "^1.0.0"
}
```

Then, run `npm install` or `yarn install` to install the package.

### Usage

To use the color variables, import them into your TailwindCSS configuration file:

```
module.exports = {
  theme: {
    extend: {
      colors: require('color-variables'),
    },
  },
};
```

You can then use the color variables in your CSS like this:

```
.text-background {
  color: var(--background);
}

.bg-foreground {
  background-color: var(--foreground);
}
```

### Functionality

The color variables provide a comprehensive range of colors that can be used for various elements in your UI, including:

- Backgrounds
- Foregrounds
- Cards
- Popovers
- Primary and secondary colors
- Muted and accent colors
- Destructive colors
- Borders
- Inputs
- Rings
- Charts

### Contribution Guidelines

Contributions to this repository are welcome and appreciated. Please follow these guidelines when contributing:

- Fork the repository and create a new branch for your changes.
- Make your changes and commit them to your branch.
- Open a pull request and describe your changes.

### License

This project is licensed under the MIT License.