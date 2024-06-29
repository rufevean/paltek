
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Pal-Tek ',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/features',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    routeBasePath: '/',
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                items: [
                    {
                        to: '/features',
                        label: 'Features',
                        position: 'left',
                        className: 'nav-features nav-item',
                    },
                    {
                        to: '/documentation',
                        label: 'Documentation',
                        position: 'left',
                        className: 'nav-docs nav-item',
                    },
                    {
                        to: '/forum',
                        label: 'Forum',
                        position: 'left',
                        className: 'nav-forum nav-item',
                    },
                    {
                        to: '../',
                        label: '.',
                        position: 'left',
                        className: 'nav-home nav-item nav__home',
                    },

                    {
                        to: '/playground',
                        label: 'Playground',
                        position: 'left',
                        className: 'nav-playground nav-item',
                    },
                    {
                        to: '/obtain',
                        label: 'Obtain',
                        position: 'left',
                        className: 'nav-obtain nav-item',
                    },
                    {
                        to: '/notes-essays',
                        label: 'Notes & Essays',
                        className: 'nav-notes nav-item',
                    },

                ],
            },
            footer: {
                // Your footer configuration
            },
            prism: {
                theme: prismThemes.dracula,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
