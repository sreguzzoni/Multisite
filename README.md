
# Multi-Stack CV Website

This repository contains the code and configuration for a multi-page CV website, where each page is implemented using a different stack of technologies. This project showcases the flexibility and adaptability of working with various modern web development frameworks and tools.

## Project Structure

- **Landing Page**: The entry point of the website, implemented with plain HTML, CSS, and JavaScript.
- **About Me Page**: Built using Next.js, a React-based framework for server-rendered applications.
- **My Projects Page**: Developed with Go for the backend and Tailwind CSS for styling.
- **Contact Page**: Created using Django, a high-level Python web framework.

## Technologies Used

- **HTML/CSS/JavaScript**: For the static landing page.
- **Next.js**: For the "About Me" section, providing server-side rendering and static site generation.
- **Go**: Serving the "My Projects" page with a simple Go web server.
- **Tailwind CSS**: Utilized for styling the "My Projects" page.
- **Django**: Powering the "Contact" section with Django’s robust web framework capabilities.
- **Nginx**: Acting as a reverse proxy to route requests to the appropriate service.

## Project Setup

### Prerequisites

- Docker
- Docker Compose

### Directory Structure

```
.
├── docker-compose.yml
├── README.md
├── django
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── manage.py
│   ├── contact
│   │   ├── __init__.py
│   │   ├── views.py
│   ├── templates
│   │   └── contact.html
│   └── multisite
│       ├── settings.py
│       ├── urls.py
│       ├── wsgi.py
├── go
│   ├── go.mod
│   ├── Dockerfile
│   ├── main.go
│   └── templates
│       └── projects.html
├── nextjs
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   ├── styles
│   │   └── globals.css
│   └── pages
│       ├── _app.js
│       └── about.js
└── nginx
    ├── Dockerfile
    ├── default.conf
    └── html
        └── index.html
```

### Setting Up and Running the Project

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/multi-stack-cv-website.git
   cd multi-stack-cv-website
   ```

2. **Initialize and Tidy Go Modules:**
   ```sh
   cd go
   go mod init yourmodule
   go mod tidy
   cd ..
   ```

3. **Build and Run the Containers:**
   ```sh
   docker-compose up --build
   ```

4. **Access the Website:**
   Open your browser and navigate to `http://localhost`.

### Detailed Instructions for Each Service

#### Next.js (About Me Page)

- **Directory:** `nextjs`
- **Build Command:**
  ```sh
  docker build -t nextjs-service .
  ```
- **Run Command:**
  ```sh
  docker run -p 3000:3000 nextjs-service
  ```

#### Go (My Projects Page)

- **Directory:** `go`
- **Build Command:**
  ```sh
  docker build -t go-service .
  ```
- **Run Command:**
  ```sh
  docker run -p 8080:8080 go-service
  ```

#### Django (Contact Page)

- **Directory:** `django`
- **Build Command:**
  ```sh
  docker build -t django-service .
  ```
- **Run Command:**
  ```sh
  docker run -p 8000:8000 django-service
  ```

#### Nginx (Reverse Proxy)

- **Directory:** `nginx`
- **Build Command:**
  ```sh
  docker build -t nginx-service .
  ```
- **Run Command:**
  ```sh
  docker run -p 80:80 nginx-service
  ```

### Troubleshooting

- Ensure all services are running by checking the logs.
- Verify the file paths and directory structure if you encounter any build issues.
- Use the provided debugging steps in the Dockerfile to check file permissions and existence.

### Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements. Contributions are always welcome!

### License

This project is licensed under the MIT License.
