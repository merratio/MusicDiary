package com.musicDiary.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "songs")
public class Song {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String artist;
	private String genre;
	private int rating;
	private String discoveryMethod;
	private String notes;
	
	public Song() {
		super();
		this.id = 0;
		this.title = "";
		this.artist = "";
		this.genre = "";
		this.rating = 0;
		this.discoveryMethod = "";
		this.notes = "";
	}
	
	public Song(int id, String title, String artist, String genre, int rating, String discoveryMethod, String notes) {
		super();
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.genre = genre;
		this.rating = rating;
		this.discoveryMethod = discoveryMethod;
		this.notes = notes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getDiscoveryMethod() {
		return discoveryMethod;
	}

	public void setDiscoveryMethod(String discoveryMethod) {
		this.discoveryMethod = discoveryMethod;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Override
	public String toString() {
		return "Song [id=" + id + ", title=" + title + ", artist=" + artist + ", genre=" + genre + ", rating=" + rating
				+ ", discoveryMethod=" + discoveryMethod + ", notes=" + notes + "]";
	}
	
	
	
	
	 

}
