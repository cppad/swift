module.exports = {
  title: 'SWIFT',
  tagline: 'Students With an Interest in the Future of Technology',
  // tagline: 'STUDENTS WITH AN INTEREST IN THE FUTURE OF TECHNOLOGY',
  url: 'https://cppad.github.io',
  baseUrl: '/swift/', /* for production development */
  // baseUrl: '/', /* for local development */
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SWIFT_favicon.ico',
  organizationName: 'cppad', // Usually your GitHub org/user name.
  projectName: 'swift', // Usually your repo name.
  themeConfig:
   {
    navbar: {
      title: '',
      style: 'dark',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_only_white.png',
      },
      items: [
        { 
          label: 'About', 
          position: 'left',
          items: [
            {
              to: 'about',
              label: 'About SWIFT'
            },
            {
              to: 'eboard',
              label: 'eBoard'
            }
          ]
        },
        {
          to: 'membership',
          label: 'Membership',
          position: 'left',
        },
        // {to: 'events', label: 'Events', position: 'left'},
        

        // A doesn't have active hover class, and when click on link it opens new tab
        // B has active hover class, doesn't open new tab when click on link
        // A https://v2.docusaurus.io/docs/api/themes/configuration/#navbar-dropdown
        {
          to: 'competition',
          label: 'Competition',
          position: 'left', // or 'right'
        },
        {
          label: 'Events',
          position: 'left', // or 'right'
          items: [
            {
              to: 'https://techsymposium.calpolyswift.org/',
              label: 'Tech Symposium',
            },
          ],
        },
        {to: 'activities', label: 'Activities', position: 'left'},
        {to: 'contact', label: 'Contact', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
              <a href="https://www.youtube.com/user/CalPolySWIFT?feature=guide" target="_blank">
                <img class="social-network" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png" alt="YouTube" />
              </a>
            `,
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://www.facebook.com/CalPolySWIFT" target="_blank">
                <img class="social-network" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="FaceBook" />
              </a>
            `,
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://twitter.com/calpolyswift" target="_blank">
                <img class="social-network" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png" alt="Twitter" />
              </a>
            `,
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://discord.com/invite/Na5PGfp" target="_blank">
                <img class="social-network" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt="Discord" />
              </a>
            `,
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://github.com/CalPolySWIFT" target="_blank">
                <img class="social-network" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github_2-512.png" alt="GitHub" />
              </a>
            `,
            },
          ],
        },
        {
          items: [
            {
              html: `
              <a href="https://www.linkedin.com/company/calpolyswift/" target="_blank">
                <img class="social-network" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/linkedin-512.png" alt="LinkedIn" />
              </a>
            `,
            },
          ],
        },


      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal Poly SWIFT. Built with Docusaurus. Coded by <a href="https://lnk.bio/z7q3">Michelle Lee</a> and <a href="">Christian Falucho</a>.`,
    },

    colorMode: {
      /**
       * unable to change default to dark mode, so must manually change colors
       */
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
