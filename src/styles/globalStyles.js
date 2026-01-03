export const GlobalStyles = {
  html: {
    height: '100%',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth'
  },
  body: {
    height: '100%',
    margin: '0',
    fontFamily: "'Inter', sans-serif",
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '1.2'
  },
  '#root': {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  'h1,h2,h3,h4,h5,h6,p': {
    margin: '0',
    padding: '0'
  },
  'ul,ol': {
    listStyle: 'none',
    paddingLeft: '0',
    margin: '0'
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  },
  button: {
    padding: '0',
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace,"
  }
};
