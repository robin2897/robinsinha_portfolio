import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export function customMaterialTheme() {
    let theme =  createMuiTheme({
        palette: {
            primary: {
                main: "#222831"
            },
            secondary: {
                main: "#fd7014"
            },
            text: {
                secondary: "#eeeeee",
                primary: "#393e46",
            }
        }
    });
    return responsiveFontSizes(theme);
}