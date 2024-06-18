# Dockerfile for Go
FROM golang:1.16-alpine

WORKDIR /build

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

RUN go build -o main .
RUN chmod +x ./main

EXPOSE 8080

CMD ["./main"]
