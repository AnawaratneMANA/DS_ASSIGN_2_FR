import {makeStyles} from "@material-ui/core";
import Image from "./Image/login_image.jpg";

export default makeStyles((theme) => ({
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },

        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        image: {
            backgroundColor:
                theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat"
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

    })
)
