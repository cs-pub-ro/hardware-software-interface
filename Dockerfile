FROM ruby:3.4.4-slim

RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /base

COPY Gemfile Gemfile.lock /base/
RUN gem install bundler:2.6.9 && bundle install

EXPOSE 4000

# Expect the Jekyll source to be in /base/app
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "-s", "/base/app" ,"-d", "/base/app/_site"]
