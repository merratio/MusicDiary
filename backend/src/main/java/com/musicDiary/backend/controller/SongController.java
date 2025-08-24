package com.musicDiary.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musicDiary.backend.service.SongService;
import com.musicDiary.backend.model.Song;

@RestController
@RequestMapping("api/songs")
public class SongController {
	@Autowired
	private SongService service;
	
	
	@GetMapping("")
	List<Song> findAll(){
		return service.findAll();
	}

}
