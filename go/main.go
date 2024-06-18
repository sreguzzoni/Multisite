package main

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles(filepath.Join("templates", "projects.html")))
	tmpl.Execute(w, nil)
}

func main() {
	http.HandleFunc("/projects", projectsHandler)
	http.ListenAndServe(":8080", nil)
}
