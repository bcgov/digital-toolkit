FROM ruby:2.5.0-alpine
MAINTAINER jonathanbell <jonathanbell.ca@gmail.com>

RUN apk update && \
    apk upgrade && \
    apk add ruby-dev \
        make \
        libpq \
        libgcc \
        gcc \
        g++ \
        ca-certificates \
        libc-dev \
        libffi-dev \
        'nodejs>6' \
        'python<3' \
        zlib-dev \
        libxml2 \
        libxml2-dev \
        libxslt \
        libxslt-dev && \
    gem install ffi -v 1.9.21 && \
    gem install rb-fsevent && \
    gem install jekyll bundler

WORKDIR /toolkit

ADD . /toolkit

RUN adduser -S jekyll

RUN chown -R jekyll:0 /toolkit && chmod -R 775 /toolkit

USER jekyll

CMD npm install --no-optional

CMD npm run build

EXPOSE 4000

CMD JEKYLL_ENV=production jekyll serve --host 0.0.0.0