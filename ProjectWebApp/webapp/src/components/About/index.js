import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Image from "./img/boxman.jpg";
import { Link as RouterLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    position: "relative",
    overflow: "hidden",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: "3rem",
  },
  body: {
    fontSize: "1.2rem",
    overflow: "hidden",
  },
  contact: {
    marginTop: theme.spacing(20),
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  imageContainer: {
    position: "absolute",
    right: 100,
    top: 0,
    marginTop: theme.spacing(25),
    marginRight: theme.spacing(0),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  "@media (max-width: 1885px)": {
    imageContainer: {
      position: "flex",
      marginTop: theme.spacing(25),
      marginLeft: theme.spacing(20),
    },
     
  },
   "@media (max-width: 1680px)": {
    root: {
      position: "flex",
      marginTop: theme.spacing(25),
      marginLeft: theme.spacing(24),
    },
     imageContainer: {
      position: "flex",
      marginTop: theme.spacing(25),
      marginLeft: theme.spacing(100),
    },
  },
  "@media (max-width: 820px)": {
    root: {
      position: "flex",
      marginTop: theme.spacing(20),
      marginLeft: theme.spacing(2),
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
    <Container className={classes.root} maxWidth="sm">
      <Typography className={classes.title} variant="h4">
        About us
      </Typography>
      <Typography className={classes.body} variant="body1">
        Your Digital Warehouse is a web application that allows users to easily manage their products. 
        The app provides a user-friendly interface where users can add, edit, and delete products with ease. 
        With Your Digital Warehouse, users can keep track of their products and inventory, making it the perfect solution 
        for small businesses or individuals who need to manage their products. Additionally, the app allows users
         to search for products and sort them by different criteria, making it easy to find what you're looking for.
        Overall, Your Digital Warehouse is a convenient and efficient tool for anyone who needs to manage their products."
        {!localStorage.getItem('emailID') ? (
          <RouterLink to="/login">Sign in now</RouterLink>
        ) : null}
      </Typography>
      

      <Typography className={classes.contact} variant="body2">
        Contact us at{" "}
        <Link href="mailto:info@example.com">info@example.com</Link>
      </Typography>

    </Container>

    <div className={classes.imageContainer}>
        <img src={Image} alt="My Warehouse" className={classes.image}/>
      </div>

  </div>
  );
};

export default About;
