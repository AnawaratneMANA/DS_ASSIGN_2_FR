import { makeStyles } from "@material-ui/core";
import Image from './Image/Registration_Image.jpg'
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        height: '100vh'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",

    },

}))