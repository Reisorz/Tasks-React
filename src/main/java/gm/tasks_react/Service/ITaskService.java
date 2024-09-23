package gm.tasks_react.Service;

import gm.tasks_react.Model.Task;
import java.util.List;

public interface ITaskService {
    public List<gm.tasks_react.Model.Task> listTasks();

    public Task searchTaskById(Integer taskId);

    public List<Task> searchTaskByName (String taskName);

    public Task saveTask(Task task);

    public void deleteTask(Task task);


}
