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
          to: 'about/about', 
          label: 'About', 
          position: 'left',
          items: [
            {
              to: 'about/about',
              label: 'About SWIFT'
            },
            {
              to: 'eboard/eboard',
              label: 'EBoard'
            }
          ]
        },
        {
          to: 'membership/membership',
          label: 'Membership',
          position: 'left',
        },
        // {to: 'events', label: 'Events', position: 'left'},
        

        // A doesn't have active hover class, and when click on link it opens new tab
        // B has active hover class, doesn't open new tab when click on link
        // A https://v2.docusaurus.io/docs/api/themes/configuration/#navbar-dropdown
        {
          
          label: 'Competition',
          position: 'left', // or 'right'
          items: [
            {
              to: 'overview', 
              label: 'Overview'
            },
            {
              to: 'CPTC',
              label: 'CPTC'
            },
            {
              to: 'CCDC',
              label: 'CCDC',
              // for new tab external links use- "href: http://.."
              // href: '...',
            },
            // ... more items
          ],
        },
        {
          label: 'Events',
          position: 'left', // or 'right'
          items: [
            {
              to: 'tech_symposium',
              label: 'Tech Symposium',
            },
            {
              to: 'workshops',
              label: 'Workshops',
            },
          ],
        },

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
          title: 'Social Network',
            items: [            
  
              {
                label: 'Facebook',
                to: 'membership/',
              },
              {
                label: 'Instagram',
                to: 'contact/',
              },
         
              {
                label: 'Youtube',
                to: 'contact/',
              },
         
            ],
          
        },
        {
          title: 'Connect',
          items: [
          {
            label: 'Discord',
          
            to: 'about/',
          },
          
          {
            label: 'Twitter',
            to: 'contact/',
          },
         
          ],
        },
        {
          title: 'Community',
          items: [

          {
            label: 'Github',
            to: 'contact/',
          },
          {
            label: 'LinkedIn',
            to: 'contact/',
          },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal Poly SWIFT. Built with Docusaurus.`,
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
