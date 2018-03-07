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
        nodejs \
        'python<3' \
        zlib-dev \
        libxml2 \
        libxml2-dev \
        libxslt \
        libxslt-dev && \
    gem install nokogiri -N && \
    gem install ffi -v 1.9.21 -N && \
    gem install jekyll -N && \
    gem install bundler -N

WORKDIR /toolkit

ADD . /toolkit

RUN npm install

RUN npm run build

RUN bundle install

RUN adduser -S jekyll

RUN chown -R jekyll:0 /toolkit && chmod -R 775 /toolkit

USER jekyll

EXPOSE 4000

CMD JEKYLL_ENV=production jekyll serve --host 0.0.0.0
