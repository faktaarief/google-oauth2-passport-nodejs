A Simple Google OAuth2 Using Passport in Node JS.

First, we need Google Credentials.
If we don't have that, we can create that on page [Google Developer Console](https://console.developers.google.com/) .

## Quick Start

To get started with this example, clone the repository and install the dependencies.

```sh
$ git clone https://github.com/faktaarief/google-oauth2-passport-nodejs.git
$ npm i
$ npm start
```

Before running the server, don't forget to set up your session secret and Google Credentials in `.env`

## Route
- `GET /` for hompage.
- `GET /auth/google/login` for login to your Google Account.
- `GET /auth/google/logout` for logout your session from server.
- `GET /success` if authentication successfully.
- `GET /failed` if authentication failed or not session from server.