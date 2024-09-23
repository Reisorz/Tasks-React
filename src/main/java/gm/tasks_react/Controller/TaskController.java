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
@CrossOrigin(value = "http://localhost:4200")
public class TaskController {

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    private TaskService taskService;

}
