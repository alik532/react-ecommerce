package com.example.demo.repository;

import com.example.demo.Task;
import org.springframework.data.repository.CrudRepository;

import java.awt.*;


public interface TaskRepository extends CrudRepository<Task, Long> {

    Task getById(Long id);

    Task findById(long id);
}