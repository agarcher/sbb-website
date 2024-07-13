# Project Name

## Overview
This project is a static site served from the `dist` directory. The site is built using commands defined in `package.json` and deployed to GitHub Pages.

## Getting Started

### Install Dependencies
First, install the necessary dependencies:
```bash
npm install
```

### Build the Site
To build the site, run:
```bash
npm run build
```

This command will:
1. Clean the `dist` directory.
2. Copy HTML files from `src` to `dist`.
3. Build the CSS using TailwindCSS.

### Serve Locally
To serve the site locally, use:
```bash
npx serve dist
```

### Deploy to GitHub Pages
The site is deployed to GitHub Pages using a GitHub Actions workflow. To deploy:

1. **Push to `main`**:
    ```bash
    git push origin main
    ```

2. **Manual Trigger**:
    You can also trigger the deployment manually from the Actions tab in your GitHub repository.

## Relevant Files
- **Build Commands**: Defined in `package.json`
- **GitHub Actions Workflow**: Defined in `.github/workflows/static.yml`

## Example Commands
- **Install Dependencies**:
    ```bash
    npm install
    ```

- **Build the Site**:
    ```bash
    npm run build
    ```

- **Serve Locally**:
    ```bash
    npx serve dist
    ```

- **Push to `main`**:
    ```bash
    git push origin main
    ```

## License
[MIT License](LICENSE)
