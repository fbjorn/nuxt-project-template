FROM node:15.11.0-alpine3.12 as frontend

ENV LC_ALL=C.UTF-8 \
    LANG=C.UTF-8 \
    NUXT_VERSION=2.15.6 \
    NUXT_FONTAWESOME_VERSION=0.4.0

WORKDIR /app

ADD frontend ./
RUN : \
  && yarn install \
  && yarn build --standalone \
  && rm -rf node_modules \
  && rm package.json \
  && yarn add \
    "nuxt-start@${NUXT_VERSION}" \
    "nuxt-fontawesome@${NUXT_FONTAWESOME_VERSION}" \
  && yarn cache clean \
  && :

ENTRYPOINT ["npx", "nuxt-start"]
EXPOSE 4000
