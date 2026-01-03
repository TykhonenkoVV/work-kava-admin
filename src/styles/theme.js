export const sizes = {
  onlyMobile: '414',
  mobile: '414',
  middleTablet: '720',
  tablet: '1024'
};

export const devices = {
  onlyMobile: `max-width: ${sizes.onlyMobile}px`,
  mobile: `min-width: ${sizes.mobile}px`,
  middleTablet: `min-width: ${sizes.middleTablet}px`,
  tablet: `min-width: ${sizes.tablet}px`,
  retina: 'min-device-pixel-ratio: 2'
};

export const lightTheme = Object.freeze({
  colors: {
    primaryBackground: '#ffffffff',
    elementsBackground: '#eff7ffff',
    buttonsBackground: '#d2e6ffff',
    buttonsDisabledBackground: '#e5e5e5',
    primaryText: '#313131ff',
    primaryDisabledText: '#bfbfbf',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337',
    langMenuBackground: '#dbdbdbff',
    themeTogglerBackground: '#ffffff',
    hover: '#DCA135'
  }
});

export const darkTheme = Object.freeze({
  colors: {
    primaryBackground: '#444444ff',
    elementsBackground: '#3f3f3fff',
    buttonsBackground: '#252525ff',
    buttonsDisabledBackground: '#595959',
    primaryText: '#ffffff',
    primaryDisabledText: '#757575',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337',
    langMenuBackground: '#252525ff',
    themeTogglerBackground: '#747474ff',
    hover: '#DCA135'
  }
});

export const theme = Object.freeze({
  sizes,

  // useWebp: document.querySelector('html').classList.contains('webp'),

  devices,

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)'
});
