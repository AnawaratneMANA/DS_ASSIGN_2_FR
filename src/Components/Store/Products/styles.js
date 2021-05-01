import { makeStyles, responsiveFontSizes } from "@material-ui/core";
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    searchBar: {
        marginTop: "50px"
    },

    searchBarHeading: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: 400,
        fontSize: 28,
    }

}))