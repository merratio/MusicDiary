package com.musicDiary.backend.model;

public class Artist {
	private String artist;
	private int count;
	
	public Artist() {
		this.artist = "";
		this.count = 0;
	}
	
	public Artist(String artist, int count) {
		this.artist = artist;
		this.count = count;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Artist [artist=" + artist + ", count=" + count + "]";
	}
	
	
	
	
	
}
