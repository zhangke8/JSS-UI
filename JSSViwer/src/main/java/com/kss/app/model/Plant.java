package com.kss.app.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Plant {
	
	@Id
	@GeneratedValue
	private int Id;
	
	private String name;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Region region;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
	@JsonIgnore
	private List<Product> products;
	
	public Plant(){}

	public Plant(int id, String name) {
		super();
		Id = id;
		this.name = name;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> product) {
		this.products = product;
	}

	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}
	
}
