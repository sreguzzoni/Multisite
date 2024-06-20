package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

// Repository represents a GitHub repository
type Repository struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	HTMLURL     string `json:"html_url"`
}

// FetchRepositories fetches repositories from the GitHub API
func FetchRepositories(username string) ([]Repository, error) {
	url := "https://api.github.com/users/" + username + "/repos"
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var repos []Repository
	if err := json.NewDecoder(resp.Body).Decode(&repos); err != nil {
		return nil, err
	}
	return repos, nil
}

// repositoriesHandler handles the repositories page
func repositoriesHandler(w http.ResponseWriter, r *http.Request) {
	username := "sreguzzoni" // Replace with any GitHub username
	repos, err := FetchRepositories(username)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	tmpl := template.Must(template.ParseFiles(filepath.Join("templates", "repositories.html")))
	tmpl.Execute(w, repos)
}

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles(filepath.Join("templates", "projects.html")))
	tmpl.Execute(w, nil)
}

func introHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles(filepath.Join("templates", "intro.html")))
	tmpl.Execute(w, nil)
}

func main() {
	http.HandleFunc("/intro", introHandler)
	http.HandleFunc("/projects", projectsHandler)
	http.HandleFunc("/repositories", repositoriesHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
