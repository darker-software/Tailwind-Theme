# Tailwind-Theme

Configured Tailwind Theme for portfolio projects

## Usage

(To utilise this theme, please ensure you are using YARN as the package manager and Tailwind is installed locally to the project.)

 1. In `package.json`, please add the following:

    ``` json
    "dev-dependencies": {
        ...
        "tailwind-theme": "git+https://github.com/darker-software/Tailwind-Theme.git"
    }
    ```
 2. Within the projects current Tailwind config, ensure you add `require('darker-software-tailwind-theme')` to the presets property on the exported object
