## Requirements

This project uses GNU Make to manage commands.
Visit https://www.gnu.org/software/make/ for more info

```shell
make help
```

## Getting Started

This is a monorepo that contains a static frontend generation scripts and aws
lambda function for authentication.
There are some other optimization scripts for the images and different file
formats.
To use this project you may use make commands to build and start the project:

```shell
make build
make start
```

## Archive

Some outdated codebase moved to the archive folder.

## Serverless

Lambda used for authentication:

```shell
cd src/serverless
npx serverless dev
```