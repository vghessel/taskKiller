FROM node:lts-buster AS BACKEND_BUILDER

LABEL STAGE="BACKEND_BUILDER"

ARG user=taskkiller
ARG group=taskkiller
ARG uid=10001
ARG gid=10001
ENV DOCUMENT_ROOT=/app
ENV TZ America/Sao_Paulo
ENV LANG pt_BR.UTF-8
ENV LANGUAGE pt_BR.UTF-8
ENV LC_ALL pt_BR.UTF-8

RUN \
    addgroup --system ${group} --gid ${gid} \
    && adduser --system --uid ${uid} --ingroup ${group} --disabled-password --shell /bin/bash ${user}

COPY backend ${DOCUMENT_ROOT}
COPY .env ${DOCUMENT_ROOT}
WORKDIR ${DOCUMENT_ROOT}

#RUN \
#    mkdir -p ${DOCUMENT_ROOT} \
#    && apk update \
#    && apk add --no-cache \
#    npm \
#    nodejs

RUN \
    npm install \
    && npm install js-beautify

EXPOSE 8080

USER ${user}

CMD [ "npm", "run", "debug" ]
