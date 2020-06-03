const remarkImages = require("remark-images");
const rehypeTruncate = require("rehype-truncate");

module.exports = {
  title: "Gigahex",
  tagline: "Monitor your Spark application",
  url: "https://docs.gigahex.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Gigahex",
  projectName: "docs-website",

  themeConfig: {
    disableDarkMode: true,
    googleAnalytics: {
      trackingID: "UA-130638312-2",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: "UA-130638312-2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "Gigahex",
      logo: {
        alt: "Gigahex Logo",
        src: "img/brand.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://gigahex.com",
          label: "Gigahex Platform",
          position: "right",
        },
        {
          href: "https://app.gigahex.com",
          label: "Sign In",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/install",
            },
            {
              label: "Guide",
              to: "docs/deploy-spark-with-gigahex",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/gigahexapp",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://medium.com/gigahex",
            },
            {
              label: "GitHub",
              href: "https://github.com/gigahexHQ",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gigahex.com`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
          editUrl: "https://github.com/gigahexhq/docs-website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/gigahexhq/docs-website/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
