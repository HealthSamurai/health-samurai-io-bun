FROM oven/bun:1-alpine

RUN apk add --no-cache git bash

WORKDIR /app

ENV GIT_REPO=""
ENV GIT_BRANCH="main"
ENV POLL_INTERVAL="60"
ENV PORT="4444"

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 4444

ENTRYPOINT ["/docker-entrypoint.sh"]
