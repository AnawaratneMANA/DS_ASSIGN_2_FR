import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        borderRadius: '0 0 25px 25px',
        background: 'linear-gradient(180deg, #fff 70%, #cfd3ce 90%)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardAction: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",

    },
}));
