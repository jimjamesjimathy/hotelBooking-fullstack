// color design tokens export

export const shades = {
  dark: {
    100: "#383D57",
    200: "#30354B",
    300: "#282C3E",
    400: "#202331",
    500: "#181A25",
  },
  light: {
    100: "#FFFFFF",
    200: "#FAF8F0",
    300: "#F5F2E0",
    400: "#F0EBD1",
    500: "#EBE5C2",
  },
  blue: {
    100: "#838AAF",
    200: "#6A73A0",
    300: "#6A73A0",
    400: "#5F6895",
    500: "#586089",
  },
  red: {
    100: "#EEB9AA",
    200: "#EBAA98",
    300: "#E89C87",
    400: "#E58E76",
    500: "#DD7255",
  },
  green: {
    100: "#8DB9A5",
    200: "#81B19B",
    300: "#74AA91",
    400: "#67A286",
    500: "#5D987B",
  },
  gold: {
    100: "#F0C57F",
    200: "#EEBC6D",
    300: "#ECB45B",
    400: "#EAAC48",
    500: "#C98518",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: shades.light[100],
              second: shades.light[200],
              third: shades.light[300],
              fourth: shades.light[400],
              fifth: shades.light[500],
            },
            secondary: {
              main: shades.red[500],
              second: shades.red[400],
              third: shades.red[300],
              fourth: shades.red[200],
              fifth: shades.red[100],
            },
            accent: {
              main: shades.green[500],
              second: shades.green[400],
              third: shades.green[300],
              fourth: shades.green[200],
              fifth: shades.green[100],
            },
            gold: {
              main: shades.gold[500],
              second: shades.gold[400],
              third: shades.gold[300],
              fourth: shades.gold[100],
              fifth: shades.gold[200],
            },
            blue: {
              main: shades.blue[500],
              second: shades.blue[400],
              third: shades.blue[300],
              fourth: shades.blue[200],
              fifth: shades.blue[100],
            },
            background: {
              main: shades.dark[500],
              secondary: shades.dark[500],
              reverse: shades.light[100],
              light: shades.blue[300],
            },
          }
        : {
            primary: {
              main: shades.dark[500],
              second: shades.dark[400],
              third: shades.dark[300],
              fourth: shades.dark[200],
              fifth: shades.dark[100],
            },
            secondary: {
              main: shades.red[100],
              second: shades.red[200],
              third: shades.red[300],
              fourth: shades.red[400],
              fifth: shades.red[500],
            },
            accent: {
              main: shades.green[100],
              second: shades.green[200],
              third: shades.green[300],
              fourth: shades.green[400],
              fifth: shades.green[500],
            },
            gold: {
              main: shades.gold[100],
              second: shades.gold[200],
              third: shades.gold[300],
              fourth: shades.gold[400],
              fifth: shades.gold[500],
            },
            blue: {
              main: shades.blue[100],
              second: shades.blue[200],
              third: shades.blue[300],
              fourth: shades.blue[400],
              fifth: shades.blue[500],
            },
            background: {
              main: shades.light[100],
              secondary: shades.gold[100],
              reverse: shades.dark[500],
              light: shades.light[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 28,
      },
      h2: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 20,
      },
      h4: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
