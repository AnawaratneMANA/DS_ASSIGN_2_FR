import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    h4: {
        fontSize: "large"
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    h2: {
        fontSize: 90,
    }

}))
