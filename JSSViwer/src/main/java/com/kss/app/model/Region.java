package com.kss.app.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Region {
	
	@Id
	@GeneratedValue
	private int Id;
	
	private String code;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy="region")
	@JsonIgnore
	private List<Plant> plants;
	
	public Region(){}
	
	public Region(int id, String code) {
		super();
		Id = id;
		this.code = code;
	}

	public int getId() {
		return Id;
	}
	
	public void setId(int id) {
		Id = id;
	}
	
	public String getCode() {
		return code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}

	public List<Plant> getPlants() {
		return plants;
	}

	public void setPlants(List<Plant> plants) {
		this.plants = plants;
	}
	

}
