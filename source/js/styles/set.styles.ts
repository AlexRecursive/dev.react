export const sizeScreen = {
  base: 1920,
  wide: 1600,
  screen: 1400,
  desktop: 1200,
  tablet: 980,
  mobile: 765,
  album: 567
}

export const colors = {
  base: '#bdcddd',
  cover: '#c2dde5',
}

export const media = {
  between: (min: string, max: string) => {
    return('@media (min-width: ' + (sizeScreen[min] + 1) + 'px) and (max-width: ' + sizeScreen[max] + 'px)')
  },
  max: (size: string) => {
    return('@media (max-width: ' + sizeScreen[size] + 'px)')
  },
  min: (size: string) => {
    return('@media (min-width: ' + (sizeScreen[size] + 1) + 'px)')
  }
}