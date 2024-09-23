package gm.tasks_react.Service;

import gm.tasks_react.Model.Task;
import gm.tasks_react.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService implements ITaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<gm.tasks_react.Model.Task> listTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task searchTaskById(Integer taskId) {
        Task task = taskRepository.findById(taskId).orElse(null);
        return task;
    }

    @Override
    public List<Task> searchTaskByName(String taskName) {
        return taskRepository.searchTaskByName(taskName);
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }
}
