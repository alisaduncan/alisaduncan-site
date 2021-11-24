module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        adCharcoal: '#303036',
        adNightBlue: '#2D3142',
        adGunmetal: 'rgb(79,88,98)',
        adTerracotta: 'rgb(225,118,94)',
        adPersimmon: '#ef8354',
        adApricot: 'rgb(249,198,177)',
        adSlate: 'rgb(91,108,143)',
        adBlueGray: '#778099',
        adGray: '#a9b7c1',
        adMint: 'rgb(229,246,197)',
        adPowderBlue: 'rgb(180,194,206)',
        adLightBlue: '#dae5f1',
        adSmoke: 'rgb(226,232,228)',
        adLightGray: 'rgb(223,231,233)',
        adButtercup: 'rgb(254,253,187)',
        adTea: 'rgb(204,232,183)',
        adWhitesmoke: 'whitesmoke',
        adGray100: '#f7fafc',
        adGray200: '#edf2f7',
        adGray500: '#a0aec0',
        adGray700: '#4a5568',
        adGray900: '#1a202c',
        adBlue900: '#2a4365',
      }
    }
  },
  variants: {},
  plugins: []
}
