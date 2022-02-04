import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    componentPaper: {

        borderRadius: "4rem",
        border: "1px solid black",
        margin:  '90px auto',
        width:  '40%',
    },

    container: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "10px",
        margin: "15px auto",
        width: "100%"
    },

    title: {

        marginTop: "50px",

    },

    form1: {
        height: "30%",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        marginRight: "2rem",
        marginLeft: "2rem",
        marginTop: "10px",
        rowGap: "20px",
        marginBottom: "30px",
    },

    link: {

        listStyle: "none",
        textDecoration: "none",

    },



    // COMPONENT VIEWTASK

    container2: {


        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        margin: "10px auto",
        width: "80%",
        // backgroundColor: "#b0c4de"
        // height: "60%"
    },

    paper2: {

        // backgroundColor: "red",

    },

    task: {
        color: "black",
        fontFamily: "bold"

    },

    btn_delete: {
        display: "flex",
        justifyContent: "center",
        width:"50%",
        backgroundColor: "gray"
    },

    // COMPO COUNTER

    count: {
        display: 'flex',
        alignItems: "center",
        fontFamily: 'sans-serif',
        flexDirection: "column",
    },

    quantity: {
        backgroundColor: "green",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        color: "#000",
        display: "flex",
        justifyContent: "center",
        border:" 2px solid #666"
    }





});




export default useStyles;