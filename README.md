# Demo web server using React and FastAPI

## Prerequisites

- Python 3.8+ and pip
- NodeJS 18+ and npm
- MongoDB server

## Getting started:

### Install Python and Javascript libraries:

```
cd ./backend
pip3 install -r requirements.txt
cd ../frontend
npm install
```

### Edit `.env` file with Database connection details:

```
cp ./backend/.env.example ./backend/.env
```

Enter the values:

```
MONGO_IP=localhost
MONGO_USER=*****
MONGO_PASSWORD=*****
```

### Run the API server:

```
cd ./backend
uvicorn main:app
```

### Run the Frontend react dev server:

```
cd ./frontend
npm start
```

## Debugging

### For VSCODE backend debugging:

```
       {
            "name": "Python: FastAPI",
            "type": "python",
            "request": "launch",
            "module": "uvicorn",
            "cwd": "${workspaceFolder}/backend",
            "envFile": "${workspaceFolder}/backend/.env",
            "args": [
                "main:app"
            ],
            "jinja": true,
            "justMyCode": true
        }
```

## Deploy

To deploy the application, follow these steps:

```bash
curl -fsSL get.docker.com | bash
curl -SL https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```

Create a copy of the .env.example file and name it .env. Open the .env file and modify the values to match your configuration.

Build all Docker containers by running the command:

```bash
docker-compose build
# If you need to debug, you can run
docker-compose build --progress plain --no-cache backend
# to upload image to docker.hub.io
docker login
# lets upload
docker-compose push
```

Start all Docker containers with the following command:

```bash
docker-compose up
# Alternatively, for better output:
docker-compose up -d && docker-compose ps && docker-compose logs -f
```

To view a list of all volumes on your Docker daemon, use the command:

```bash
docker volume ls
# If needed, you can remove a specific volume by running:
docker volume rm <VOLUME_NAME>
```

If you require a self-signed certificate, generate it using the following commands:

```bash
openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
openssl req -new -x509 -key private.key -out certificate.crt -days 365
```

That's it! Your application should now be deployed and running using Docker.
