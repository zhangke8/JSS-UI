package com.kss.app.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kss.app.exceptions.PlantNotFoundException;
import com.kss.app.exceptions.RegionNotFoundException;
import com.kss.app.model.Plant;
import com.kss.app.model.Product;
import com.kss.app.model.Region;
import com.kss.app.repositories.PlantRepository;
import com.kss.app.repositories.ProductRepository;

@RestController
public class PlantController {

	@Autowired
	PlantRepository plantRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@PostMapping("/plants/")
	public ResponseEntity<Object> save(@RequestBody Plant plant){
		
		plantRepository.save(plant);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().fromPath("/{id}").buildAndExpand(plant.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/plants/")
	public List<Plant> findAll(){
		
		return plantRepository.findAll();
	}
	
	@GetMapping("/plants/{id}/")
	public Optional<Plant> findPlantById(@PathVariable int id){
		Optional<Plant> plant =  plantRepository.findById(id);
		
		if(!plant.isPresent()){
			throw new PlantNotFoundException("{id} - "+id);
		}
		
		return plant;
	}
	
	@DeleteMapping("/plants/{id}/")
	public void delete(@PathVariable int id){
		
		plantRepository.deleteById(id);
	}
	
	@GetMapping("/plants/{id}/products/")
	public List<Product> getPlantProducts(@PathVariable int id){
		
		Optional<Plant> plant = plantRepository.findById(id);
		
		if(!plant.isPresent()){
			throw new PlantNotFoundException("{id} - "+id);
		}
		
		return plant.get().getProducts();
	}
	
	@PostMapping("/plants/{id}/products/")
	public ResponseEntity<Object> savePlantProducts(@PathVariable int id, @RequestBody Product product){
		Optional<Plant> plant = plantRepository.findById(id);
		
		if(!plant.isPresent()){
			throw new PlantNotFoundException("{id} - "+id);
		}
		
		product.setPlant(plant.get());
		
		productRepository.save(product);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().fromPath("/{id}").buildAndExpand(product.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
}
