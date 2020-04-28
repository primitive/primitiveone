// Variables
// COLORS

// Color system

const colors = {
  black: "#000000",
  white: "#ffffff",

  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#28a745",
  teal: "#20c997",
  cyan: "#17a2b8",

  grays: {
    base: "#6D6D6D",
    light: "#DCD7CA",
    lighter: "#F5EFE0",
    g100: "#f8f9fa",
    g200: "#e9ecef",
    g300: "#dee2e6",
    g400: "#ced4da",
    g500: "#adb5bd",
    g600: "#6c757d",
    g700: "#495057",
    g800: "#807c7d",
    g900: "#212529"
  }
}


//light: "#CCC5B3",
//dark: "#0C0B13",

const primitive = {
  red: "#cd2653",
  blue: "#0f52ba",
  orange: "#F05E23",
  green: "#87af4e",

  redapple: "#E1623F",
  fluff: "#ADD8E6",
  mustard: "#ffdb58",
  greendark: "#6c8c3e",
  mango: "#ffc324",
  lime: "#00FF00",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  peach: "#eb966c",

  coal: "#0c112b",
  graphite: "#212529",
  midnight: "#0C0B13",

  brightlime: "#d7f36d",
  teal: "#008080",
  watermelon: "#fc6c85",
  salmom: "#ff8c69",
  tomato: "#ff6347",
  coral: "#E1623F",
  cyan: "#00a5ba"
}

const bs = {
  primary: primitive.green,
  secondary: primitive.peach,
  success: primitive.brightlime,
  info: primitive.teal,
  warning: primitive.mustard,
  danger: primitive.redapple,
  light: colors.grays.g100,
  dark: colors.grays.g800,
}


const colortheme = {
  white:    colors.white,
  black:    colors.black,

  blue:     colors.blue,
  indigo:   colors.indigo,
  purple:   primitive.plum,
  pink:     primitive.pink,
  red:      primitive.red,
  orange:   primitive.mango,
  yellow:   primitive.mustard,
  green:    primitive.green,
  teal:     primitive.teal,
  cyan:     primitive.cyan,

  gray:     colors.grays.g600,
  grays: {
    base: colors.grays.base,
    light: colors.grays.light,
    lighter: colors.grays.lighter
  },

  coal:     primitive.coal,
  ivory:    primitive.ivory,
  cream:    primitive.cream,
  peach:    primitive.peach,
  fluff:    primitive.fluff,
  lime: primitive.lime,
  mustard: primitive.mustard,
  greendark: primitive.greendark,

  disco: {
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    neongreen: "#01FF89",
    purple: "#7A5FFF",
    blue: "#00a8ff"
  },



  bs: {
    primary: bs.primary,
    secondary: bs.secondary,
    success: bs.success,
    info: bs.info,
    warning: bs.warning,
    danger: bs.danger,
    light: bs.light,
    dark: bs.dark
  }
}

export { colortheme };