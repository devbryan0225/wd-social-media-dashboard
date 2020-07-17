module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html']
  }   ,
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      letterSpacing: {
        widestest: '.5em'
      },
      backgroundColor: {
        'smd': 'var(--smd-main-background)',
        'smd-card': 'var(--smd-card-background)',
        'smd-card-hover': 'var(--smd-card-background-hover)'
      },
      textColor: {
        'smd-primary': 'var(--smd-text-primary)',
        'smd-secondary': 'var(--smd-text-secondary)',
        'smd-overview': 'var(--smd-text-overview)'
      },
      flex: {
        'fit-4': '0 1 23%'
      }
    },
  },
  variants: {},
  plugins: [],
}
