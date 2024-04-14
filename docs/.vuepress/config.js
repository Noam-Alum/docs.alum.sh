
module.exports = {
  title: 'ALUM.SH - docs',
  description: 'ALUM.SH Documents',
  head: [
    ['link', { rel: "shortcut icon", type: 'image/png', href: "/images/logo.png"}],
  ],
  base: '/',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Main site', link: 'https://alum.sh/' },
      { text: 'Documents', link: '/' },
      { text: 'Requests', link: 'https://alum.sh/assets/requests.php' }
    ],
    sidebar: [
     {
          title: 'Make backup',
          children: [
            '/Make-backup/introduction',
            '/Make-backup/installation',
            'Make-backup/usage',
          ]
     },
    ],
    repo: 'Noam-Alum/',
    docsRepo: 'Noam-Alum/docs.alum.sh',
    docsDir: 'docs',
    docsBranch: 'master'
  }
}
