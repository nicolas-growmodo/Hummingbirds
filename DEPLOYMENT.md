# Deploying to Subbly

Since Subbly does not host full React applications directly, we will use **GitHub Pages** to host your application files (JavaScript and CSS) and then embed them into your Subbly site.

## Step 1: Deploy to GitHub Pages

1.  **Run the deploy command:**
    Open your terminal and run:
    ```bash
    npm run deploy
    ```
    This script builds your project and uploads the `dist` folder to the `gh-pages` branch on GitHub.

2.  **Get your live URL:**
    After a few minutes, your site will be live. 
    *   Go to your GitHub Repository settings > **Pages**.
    *   You will see your deployed URL (e.g., `https://nicolas-growmodo.github.io/Hummingbirds-landing/`).

## Step 2: Get the Asset Links

To embed the app in Subbly, you need the direct links to your generated JavaScript and CSS files.

1.  Open your deployed GitHub Pages URL in a browser.
2.  Right-click anywhere on the page and select **View Page Source**.
3.  Look for lines like these:
    ```html
    <script type="module" crossorigin src="/Hummingbirds-landing/assets/index-D8s7s7d.js"></script>
    <link rel="stylesheet" crossorigin href="/Hummingbirds-landing/assets/index-G7d8s8s.css">
    ```
4.  Copy the full URLs of these files. They should look like:
    *   **JS URL:** `https://nicolas-growmodo.github.io/Hummingbirds-landing/assets/index-XXXX.js`
    *   **CSS URL:** `https://nicolas-growmodo.github.io/Hummingbirds-landing/assets/index-XXXX.css`

    *Note: The filenames change every time you deploy.*

## Step 3: Embed in Subbly

1.  Log in to your **Subbly Admin Dashboard**.
2.  Go to **funnel** or **website** builder where you want the app to appear.
3.  Add a **Custom Code** element or use the general **Code Injection** settings if you want it on every page.
4.  Paste the following code block:

```html
<!-- Container where React will mount -->
<div id="root"></div>

<!-- Your App Styles -->
<link rel="stylesheet" href="YOUR_CSS_URL_HERE">

<!-- Your App Logic -->
<script type="module" src="YOUR_JS_URL_HERE"></script>
```

5.  **Replace** `YOUR_CSS_URL_HERE` and `YOUR_JS_URL_HERE` with the links you copied in Step 2.
6.  **Save and Publish** your Subbly page.

## Updating your site

Whenever you make changes:
1.  Run `npm run deploy` locally.
2.  Wait for GitHub Pages to update.
3.  **Important:** Since the filenames (hashes) change, you must update the URLs in Subbly with the new ones from your GitHub Pages source.
