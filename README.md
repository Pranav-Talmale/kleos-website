# [Kleos Website]

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root ./ directory of the product and run `npm install` to install our local dependencies.
3. To run the app locally, navigate to the root ./ directory of the product and run `npm run start`.

### Directory Structure

Within the download you'll find the following directories and files:

```
Kleos Website React
.
│   .env
│   .gitignore
│   .npmrc
│   .prettierignore
│   jsconfig.json
│   package.json
│   README.md
├───public
│       ACM.ico
│       ACM.png
│       index.html
│       manifest.json
│       robots.txt
│       _redirects
└───src
    │   index.js
    │   store.js
    ├───assets
    ├───components
    │   ├───Footer
    │   │       Footer.js
    │   ├───Navbars
    │   │       ExamplesNavbar.js
    │   │       IndexNavbar.js
    │   └───PageHeader
    │           PageHeader.js
    ├───slices
    │       apiSlice.js
    │       authSlice.js
    │       paymentApiSlice.js
    │       usersApiSlice.js
    └───views
        ├───home
        │   │   Home.js
        │   │
        │   └───HomeSections
        │           About.js
        │           Domains.js
        │           FAQs.js
        │           Register.js
        │           Timeline.js
        ├───profile
        │   │   ProfilePage.js
        │   │
        │   └───ProfileSections
        │           HackTemplate.js
        │           Payment.js
        │           TeamInfo.js
        └───register
                RegisterPage.js
                SignInPage.js
```