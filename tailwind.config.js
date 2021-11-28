module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
    safeList: [
      'adTea',
      'adTerracotta',
      'adSalmon',
      'adCultured',
      'adAliceBlue',
      'adGainsboro',
      'adLightBlue',
      'adCadetBlueGray',
      'adCadetBlue',
      'adShadowBlue',
      'adBedazzledBlue',
      'adIndigoDye',
      'adCharcoal',
    ]
  },
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        adTea: 'rgb(204,232,183)',
        adTerracotta: '#e1765e',
        adSalmon: '#eaa090',
        adCultured: '#f7fafc',
        adAliceBlue: '#edf2f7',
        adGainsboro: '#edf2f7',
        adLightBlue: '#dae5f1',
        adCadetBlueGray: '#a9b7c1',
        adCadetBlue: '#a0aec0',
        adShadowBlue: '#7389a1',
        adBedazzledBlue: '#3d5a80',
        adIndigoDye: '#2a4365',
        adCharcoal: '#303036',
      }
    }
  },
  variants: {},
  plugins: []
}
