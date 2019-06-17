# Movie Doozy

Browse movies with Movie Doozy!

Movie Doozy is a React frontend, powered by an Node Express server, which consumes the [The Movie Database](https://www.themoviedb.org/) API. It also includes a caching layer.

## Installation
This project was built using:
* `Node.js v11.10.0`
* `npm v6.7.0`

It's recommended that you use these or higher versions of these tools to avoid issues. If these tools are installed:

Clone the repository:
```
git clone https://github.com/catheg88/movie-doozy.git
```

Change directories into the repository and install dependencies with `npm`:
```
cd movie-doozy
npm install
```

## Run Movie Doozy
The Movie Database requires an API key. The easiest way to supply it is by passing it into Node as you start the Express server:
```
API_KEY=[your api key here] npm start
```

`npm start` starts the server running on port 3000. Navigate to http://localhost:3000/ and you'll see the running app.

Created by [Alex Theg](https://github.com/catheg88/)
