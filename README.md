# Multi-Technology CV Website

This project is a multi-page CV website built using a variety of technologies for each section, all managed within Docker containers. Each section of the website showcases different aspects of the developer's skills, experiences, and personal interests, with each section using a different technology stack.

## Project Structure

- **Next.js (Professional Pages)**
  - Routes under `/professional`
  - Pages: Intro, Work Experience, Study, Skills, Timeline
- **Django (Personal Pages)**
  - Routes under `/personal`
  - Pages: Intro, Hobbies, Favorite Things
- **Go (Projects)**
  - Routes under `/projects`
  - Pages: Intro, Project List

## Technologies Used

- **Next.js**: Frontend framework for the professional section.
- **Django**: Backend framework for the personal section.
- **Go**: Programming language for the projects section.
- **Tailwind CSS**: Styling framework for the Next.js section.
- **Bulma**: CSS framework for the Django section.
- **Chart.js**: Used for data visualization in the Next.js skills page.
- **React Responsive Carousel**: Used for creating a carousel slider in the Next.js skills page.
- **Docker**: Containerization of the different sections.

## Setup and Installation

### Prerequisites

- Docker
- Docker Compose

### Installation Steps

1. Clone the repository:
```sh
git clone https://github.com/yourusername/multi-tech-cv-website.git
cd multi-tech-cv-website
```

2. Build and run the Docker containers:
```sh
docker-compose up --build
```

3. Access the website at `http://localhost:8080`

### Docker Configuration

- **Docker Compose**: Orchestrates the different services (Next.js, Django, Go, Nginx).
- **Next.js Dockerfile**: Defines the setup for the Next.js service.
- **Django Dockerfile**: Defines the setup for the Django service.
- **Go Dockerfile**: Defines the setup for the Go service.
- **Nginx Dockerfile**: Configures Nginx to serve as a reverse proxy for the different services.

### Features

- **Sticky Navigation**: Both the header and footer remain fixed on the screen for easy access.
- **Dynamic Skills Page**: Includes a carousel with technical and soft skills charts.
- **Responsive Design**: Ensures the website is accessible on different devices.
- **Modular Architecture**: Different sections use different technology stacks, showcasing versatility.

### Future Improvements

- Enhance animations and transitions for a more dynamic user experience.
- Add more interactive elements like contact forms or feedback sections.
- Integrate a database for dynamic content management.

### License
This project is licensed under the MIT License.