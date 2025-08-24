package com.musicDiary.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.musicDiary.backend.model.Song;

@Repository
public interface SongRepo extends JpaRepository<Song, Integer>{

}
