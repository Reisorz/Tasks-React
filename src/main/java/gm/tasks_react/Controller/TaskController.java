package gm.tasks_react.Controller;

import gm.tasks_react.Model.Task;
import gm.tasks_react.Service.TaskService;
import gm.tasks_react.exceptions.NotFoundExecption;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
//http://localhost:8080/tasks-app
@RequestMapping("tasks-app")
@CrossOrigin(value = "http://localhost:3000")
public class TaskController {

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        List<Task> tasks = taskService.listTasks();
        tasks.forEach(task -> logger.info(task.toString()));
        return tasks;
    }

    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task task) {
        logger.info("Task to add: " + task);
        return taskService.saveTask(task);
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> searchTaskById(@PathVariable Integer id) {
        Task task = taskService.searchTaskById(id);
        if (task == null)
            throw new NotFoundExecption("Could not find the task with id: " + id);
        return ResponseEntity.ok(task);
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> editTask(@PathVariable Integer id, @RequestBody Task taskReceived) {
        Task task = taskService.searchTaskById(id);
        if(task == null) {
            throw new NotFoundExecption("Could not find task with id: " + id);
        }
        task.setTaskName(taskReceived.getTaskName());
        task.setResponsiblePerson(taskReceived.getResponsiblePerson());
        task.setStatus(taskReceived.getStatus());
        taskService.saveTask(task);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTask (@PathVariable Integer id) {
        Task task = taskService.searchTaskById(id);
        if(task == null) {
            throw new NotFoundExecption("Could not find task with id: " + id);
        }
        taskService.deleteTask(task);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
