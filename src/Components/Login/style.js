import {makeStyles} from "@material-ui/core";
import * as url from "url";
import Image from './Login/Image/login_image.jpg'

export default makeStyles((theme) => ({
        toolbar: theme.mixins.toolbar,
        root: {
                height: '100vh'
        },
        image: {
                backgroundImage: `url(${Image})`,
                backgroundRepeat: "no-repeat",
                backgroundColor:
                theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
                backgroundSize : "cover",
                backgroundPosition: "center",

        },
        paper: {
                margin: theme.spacing(8,4),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
        },


})
)
