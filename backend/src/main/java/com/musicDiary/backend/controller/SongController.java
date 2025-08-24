package com.musicDiary.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musicDiary.backend.service.SongService;
import com.musicDiary.backend.model.Song;

@RestController
@RequestMapping("api/songs")
@CrossOrigin(origins="http://localhost:5173")
public class SongController {
	@Autowired
	private SongService service;
	
	
	@GetMapping("")
	List<Song> findAll(){
		return service.findAll();
	}
	
	@PostMapping("")
    public ResponseEntity<Song> addSong(@RequestBody Song song) {
    	service.save(song);
    	return new ResponseEntity<>(song, HttpStatus.CREATED);
    }

}
