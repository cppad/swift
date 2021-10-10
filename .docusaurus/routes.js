
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/swift-new-website/',
  component: ComponentCreator('/swift-new-website/','514'),
  exact: true,
},
{
  path: '/swift-new-website/about',
  component: ComponentCreator('/swift-new-website/about','627'),
  exact: true,
},
{
  path: '/swift-new-website/blog',
  component: ComponentCreator('/swift-new-website/blog','e8f'),
  exact: true,
},
{
  path: '/swift-new-website/blog/hello-world',
  component: ComponentCreator('/swift-new-website/blog/hello-world','76f'),
  exact: true,
},
{
  path: '/swift-new-website/blog/hola',
  component: ComponentCreator('/swift-new-website/blog/hola','149'),
  exact: true,
},
{
  path: '/swift-new-website/blog/tags',
  component: ComponentCreator('/swift-new-website/blog/tags','e0a'),
  exact: true,
},
{
  path: '/swift-new-website/blog/tags/docusaurus',
  component: ComponentCreator('/swift-new-website/blog/tags/docusaurus','389'),
  exact: true,
},
{
  path: '/swift-new-website/blog/tags/facebook',
  component: ComponentCreator('/swift-new-website/blog/tags/facebook','ee6'),
  exact: true,
},
{
  path: '/swift-new-website/blog/tags/hello',
  component: ComponentCreator('/swift-new-website/blog/tags/hello','1e7'),
  exact: true,
},
{
  path: '/swift-new-website/blog/tags/hola',
  component: ComponentCreator('/swift-new-website/blog/tags/hola','917'),
  exact: true,
},
{
  path: '/swift-new-website/blog/welcome',
  component: ComponentCreator('/swift-new-website/blog/welcome','800'),
  exact: true,
},
{
  path: '/swift-new-website/competition',
  component: ComponentCreator('/swift-new-website/competition','e88'),
  exact: true,
},
{
  path: '/swift-new-website/contact',
  component: ComponentCreator('/swift-new-website/contact','629'),
  exact: true,
},
{
  path: '/swift-new-website/eboard',
  component: ComponentCreator('/swift-new-website/eboard','c00'),
  exact: true,
},
{
  path: '/swift-new-website/membership',
  component: ComponentCreator('/swift-new-website/membership','cf4'),
  exact: true,
},
{
  path: '/swift-new-website/docs',
  component: ComponentCreator('/swift-new-website/docs','cae'),
  
  routes: [
{
  path: '/swift-new-website/docs/',
  component: ComponentCreator('/swift-new-website/docs/','bf2'),
  exact: true,
},
{
  path: '/swift-new-website/docs/doc2',
  component: ComponentCreator('/swift-new-website/docs/doc2','5d1'),
  exact: true,
},
{
  path: '/swift-new-website/docs/doc3',
  component: ComponentCreator('/swift-new-website/docs/doc3','29c'),
  exact: true,
},
{
  path: '/swift-new-website/docs/mdx',
  component: ComponentCreator('/swift-new-website/docs/mdx','0ba'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
