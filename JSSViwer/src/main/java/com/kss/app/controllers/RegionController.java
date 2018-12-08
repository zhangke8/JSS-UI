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

import com.kss.app.exceptions.RegionNotFoundException;
import com.kss.app.model.Plant;
import com.kss.app.model.Region;
import com.kss.app.repositories.PlantRepository;
import com.kss.app.repositories.RegionRepository;

@RestController
public class RegionController {

	@Autowired
	RegionRepository regionRepository;
	
	@Autowired
	PlantRepository plantRepository;
	
	@PostMapping("/regions/")
	public ResponseEntity<Object> save(@RequestBody Region region){
		
		regionRepository.save(region);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().fromPath("/{id}").buildAndExpand(region.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/regions/")
	public List<Region> findAll(){
		
		return regionRepository.findAll();
	}
	
	@GetMapping("/regions/{id}/")
	public Region findRegionById(@PathVariable int id){
		Optional<Region> region =  regionRepository.findById(id);
		
		if(!region.isPresent()){
			throw new RegionNotFoundException("{id} - "+id);
		}
		
		return region.get();
	}
	
	@DeleteMapping("/regions/{id}/")
	public void delete(@PathVariable int id){
		regionRepository.deleteById(id);
	}
	
	@GetMapping("/region/{id}/plants/")
	public List<Plant> getRegionPlants(@PathVariable int id){
		
		Optional<Region> region = regionRepository.findById(id);
		
		if(!region.isPresent()){
			throw new RegionNotFoundException("{id} - "+id);
		}
		
		return region.get().getPlants();
	}
	
	@PostMapping("/region/{id}/plants/")
	public ResponseEntity<Object> saveRegionPLants(@PathVariable int id, @RequestBody Plant plant){
		Optional<Region> region = regionRepository.findById(id);
		
		if(!region.isPresent()){
			throw new RegionNotFoundException("{id} - "+id);
		}
		
		plant.setRegion(region.get());
		
		plantRepository.save(plant);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().fromPath("/{id}/plants").buildAndExpand(plant.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
}
