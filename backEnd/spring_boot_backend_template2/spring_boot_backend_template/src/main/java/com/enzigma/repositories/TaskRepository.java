package com.enzigma.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enzigma.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
