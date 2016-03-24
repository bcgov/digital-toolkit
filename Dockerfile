FROM tcnksm/centos-ruby:2.1
MAINTAINER sheaphillips <shea.phillips@gmail.com>

RUN yum -y install nodejs && gem install jekyll --no-ri --no-rdoc && mkdir /toolkit

#COPY Gemfile* /toolkit/

WORKDIR /toolkit

RUN bundle install

ADD . /toolkit

RUN jekyll build --trace

EXPOSE 4000

CMD jekyll serve --verbose --skip-initial-build

