package com.musicDiary.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musicDiary.backend.model.Song;
import com.musicDiary.backend.repository.SongRepo;

@Service
public class SongService {
	@Autowired
	private SongRepo repo;
	
	public List<Song> findAll() {
		return repo.findAll();
		
	}

}
