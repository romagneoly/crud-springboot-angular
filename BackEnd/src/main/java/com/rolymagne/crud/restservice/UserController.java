package com.rolymagne.crud.restservice;

import com.rolymagne.crud.model.User;
import com.rolymagne.crud.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "user")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody User user) {
        try {
            return ResponseEntity.ok().body(userService.save(user));
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> read() {
        try {
            return ResponseEntity.ok().body(userService.read());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody User user) {
        try {
            return ResponseEntity.ok().body(userService.save(user));
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(path = "/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable long id) {
        try {
            return ResponseEntity.ok().body(userService.delete(id));
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
