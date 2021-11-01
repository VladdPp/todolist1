package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/cors"
	"github.com/gin-gonic/gin"
)

// Function called for index
func indexView(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
	c.JSON(http.StatusOK, gin.H{"message": "TODO APP"})
}

// Setup Gin Routes
func SetupRoutes() *gin.Engine {
	// Use Gin as router
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	// Set route for index
	router.GET("/", indexView)

	// Set routes for API
	// Update to POST, UPDATE, DELETE etc
	router.GET("/items", TodoItems)
	router.GET("/item/create/:item", CreateTodoItem)
	router.GET("/item/update/:id/:done", UpdateTodoItem)
	router.GET("/item/delete/:id", DeleteTodoItem)

	// Set up Gin Server
	return router
}

// Main function
func main() {
	SetupPostgres()
	router := SetupRoutes()
	router.Run(":8081")
}
