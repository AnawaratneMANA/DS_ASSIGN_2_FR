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
        marginTop: "20px",
        width: "300px",
        height: '30px',
    }

}))