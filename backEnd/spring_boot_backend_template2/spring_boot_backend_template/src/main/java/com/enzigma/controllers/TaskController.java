package com.enzigma.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enzigma.entities.Task;
import com.enzigma.services.TaskService;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
	
	@Autowired 
	private TaskService taskService;
	
	@GetMapping 
	public List<Task> getTasks() { 
		return taskService.getAllTasks(); 
	}
	
	@PostMapping
	public Task createTask(@RequestBody Task task) {
		return taskService.createTask(task);
	}
	
	@PutMapping("/{id}") 
	public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
		return taskService.updateTask(id, task);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTask(@PathVariable Long id) {
		taskService.deleteTask(id);
		return ResponseEntity.ok().build();
	}
}


