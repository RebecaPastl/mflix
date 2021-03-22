# MFLIX App

## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Deployment](#deployment)
* [Technologies](#technologies)
* [Author](#author)
* [License](#license)

## Description

The MFLIX web application allows visitors to display a list of all classic movies registered to the database or search for movies based on genre.

## Requirements

Requirements:

- Axios
- Babel-loader
- Bootstrap
- Css-loader
- Dotenv
- Express
- Mongoose
- Nodemon (package.json -> under scripts: "dev" : "nodemon app.js")
- React
- React-bootstrap
- React-bootstrap-icons
- ReactDOM
- Style-loader 
- Webpack (package.json -> under scripts: "watch" : "webpack --watch")
- Webpack-cli 
- @babel/preset-react 
- @babel/preset-env 
- @babel/core

## Deployment
This Project can be deployed using Vercel.
It is necessary to create **environment variables** to access Google Sheets:
```
SHEET_CLIENT_EMAIL=service credential’s client email
SHEET_PRIVATE_KEY= service credential’s private key (all \n must be replaced by a new line and the whole key must be encoded in base64)
SHEET_DOC_ID=sheet address/id
```

## Technologies

* [ReactJs](https://reactjs.org/) -The React Framework.
* [Bootstrap](https://getbootstrap.com/) - a CSS framework directed at responsive, mobile-first front-end web development.
* [React Bootstrap](https://react-bootstrap.github.io/) - bootstrap framework adapted to React.

## Author

* **Rebeca Pastl** - [LinkedIn](https://www.linkedin.com/in/rebeca-pastl/)

## License

MIT License 
Copyright (c) [2020] [Rebeca Pastl].
For more information, read [LICENSE.md](LICENSE.md).
