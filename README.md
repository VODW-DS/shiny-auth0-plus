# Auth0 + Shiny proxy
This server proxies a shiny instance protecting it with Auth0

#Running the proxy
In order to run this proxy you need to have npm and nodejs installed.

You also need to set the ClientSecret, ClientId and Domain for your Auth0 app as environment variables with the following names respectively: `AUTH0_CLIENT_SECRET`, `AUTH0_CLIENT_ID` and `AUTH0_DOMAIN`.

For that, if you just create a file named `.env` in the directory and set the values like the following, the app will just work:

````bash
# .env file
AUTH0_CLIENT_SECRET=myCoolSecret
AUTH0_CLIENT_ID=myCoolClientId
AUTH0_DOMAIN=myCoolDomain
AUTH0_CALLBACK_URL=https://my.url.com/
AUTH0_AUDIENCE=urn:shiny:dev
COOKIE_SECRET=somethingRandomHerePlease
SHINY_HOST=localhost
SHINY_PORT=3838
PORT=3000
````

Once you've set those environment variables, just run `npm start` and try calling [http://localhost:3000/](http://localhost:3000/)
