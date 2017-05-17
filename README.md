## `koa2-ts-init`
> Typescript fork of [koa2-kickstarter](https://github.com/umayr/koa2-kickstarter). Wondering why Typescript ? Read [this](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript) post on StackOverflow

### Setup
```bash
  # clone the repository
  λ git clone https://github.com/mohuk/koa2-ts-init
  # change the current directory
  λ cd koa2-ts-init
  # install all dependencies
  λ yarn
  # run the project
  λ npm run start
```

### Structure
```bash
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── conf            # wraps configurations files
│   ├── controller      # contains all controllers in the application
│   ├── custom-typings      # contains all controllers in the application
│   ├── middleware      # folder with all middlewares
│   ├── route           # wraps all the routes and exports a single composed middleware
│   └── service         # contains all the service logic
└── test                # unit tests
```

**Suggestion:** Every folder name is _singular_ like `route`, `middleware` instead of `routes`, `middlewares`. If you want to add more folders as per your need, make sure they should be singular too (for e.g. `util`, `helper` etc) only for the sake of consistency.

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Ava](https://github.com/avajs/ava) For unit tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [Typescript](https://github.com/Microsoft/TypeScript) Typed superset of Javascript. Supports ES6/ES7 features.
- [TSLint](https://github.com/palantir/tslint) Linting purposes.
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).

And many more small packages.

### Scripts

- `npm start` - simply starts the server
- `npm test` - execute all unit tests
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - starts the server with hot-reloading

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`

### Docker

`Dockerfile` for the project has been packaged. Running instructions are standard and can be found below:

#### Build
```bash
λ docker build -t koa .
```

#### Run
```bash
# you can set the DEBUG environment variable through -e DEBUG={value} 
λ docker run -dp 4000:4000 koa
```
