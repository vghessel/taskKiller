FROM alpine:3.19 AS GUI_BUILDER

LABEL STAGE="GUI_BUILDER"

ENV DOCUMENT_ROOT=/build

COPY gui ${DOCUMENT_ROOT}
COPY builder/gui/nginx.conf ${DOCUMENT_ROOT}
WORKDIR ${DOCUMENT_ROOT}

RUN \
    mkdir -p ${DOCUMENT_ROOT} \
    && apk update \
    && apk add --no-cache \
    yarn \
    nodejs

RUN \
    yarn install \
    && yarn build

FROM nginx:alpine3.17 AS IMAGEM_NGINX_PRD

LABEL STAGE="IMAGEM_NGINX_PRD"

ARG DOCUMENT_ROOT=/usr/share/nginx/html
ENV TZ America/Sao_Paulo
ENV LANG pt_BR.UTF-8
ENV LANGUAGE pt_BR.UTF-8
ENV LC_ALL pt_BR.UTF-8

COPY --from=GUI_BUILDER  /build/dist/ ${DOCUMENT_ROOT}
COPY --from=GUI_BUILDER  /build/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

WORKDIR ${DOCUMENT_ROOT}
