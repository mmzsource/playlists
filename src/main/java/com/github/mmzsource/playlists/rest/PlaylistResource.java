package com.github.mmzsource.playlists.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController("PlaylistResource")
@RequestMapping("/v1/playlists")
public class PlaylistResource {

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity about() {
        Map<String, String> response = new HashMap<>();
        response.put("Application", "Playlists");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
