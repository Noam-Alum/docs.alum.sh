
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
     '/',
     {
          title: 'Make backup',
          children: [
            '/Make-backup/introduction',
            '/Make-backup/installation',
            '/Make-backup/usage',
            '/Make-backup/script-breakdown'
          ]
     },
     {
          title: 'OTS ',
          children: [
            '/OTS/introduction-installation',
          ]
     },
     {
      title: 'WP manager',
      children: [
        '/WP-manager/introduction-and-usage',
        '/WP-manager/Export-database',
        '/WP-manager/Compress-directory',
        '/WP-manager/Migration'
      ]
     },
     {
      title: 'wp_recovery',
      children: [
        '/wp_recovery/introduction-and-usage.md'
      ]
     },
     {
      title: 'jet-tools',
      children: [
        '/jet-tools/introduction-and-usage',
        {
          title: 'tools',
          children: [
            '/jet-tools/tools/Alter-tables',
            '/jet-tools/tools/imunify-malicious-list',
            '/jet-tools/tools/WordPress-related',
            '/jet-tools/tools/Running_proc',
            '/jet-tools/tools/litespeed_data_domains',
            '/jet-tools/tools/download_data'
          ]
        },
        '/jet-tools/script-breakdown',
      ]
     }
    ],
    repo: 'Noam-Alum/',
    docsRepo: 'Noam-Alum/docs.alum.sh',
    docsDir: 'docs',
    docsBranch: 'master'
  }
}
