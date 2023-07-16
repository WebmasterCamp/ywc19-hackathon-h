# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=16.20.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

ENV SKIP_ENV_VALIDATION=true

################################################################################
# Create a stage for building the application.
FROM base as build

ENV PORT=8080

RUN corepack prepare yarn@3.6.1
RUN corepack enable yarn

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY . .

RUN yarn prisma migrate reset --force

CMD ["yarn", "dev"]

# FROM base as final
#
# ENV NODE_ENV production
#
#
# USER node
#
# COPY --from=build /usr/src/app/.next/standalone ./
# COPY --from=build /usr/src/app/.next/static ./.next/static
# COPY --from=build /usr/src/app/prisma ./prisma
#
# CMD node server.js
