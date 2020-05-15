FROM node:12.16-alpine3.11
LABEL maintainer="Jhon H. Caicedo"
LABEL e-mail="jhcaiced@inticol.com"

RUN apk add bash git curl nodejs npm
RUN npm install -g npm
RUN curl https://raw.githubusercontent.com/eficode/wait-for/master/wait-for > /usr/local/bin/wait-for \
  && chmod 755 /usr/local/bin/wait-for
