.DEFAULT_GOAL := all

all: env build up

build:
	docker-compose build

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

env:
	cp env.example .env
	cp backend/env.example backend/.env
	cp frontend/src/environment/example.environment.js frontend/src/environment/environment.js
	openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj \
	"/C=GY/ST=Demerara/L=Georgetown/" \
	-keyout config/nginx/certs/app.key \
	-out config/nginx/certs/app.crt

cleanup:
	docker-compose down --volumes --rmi local

