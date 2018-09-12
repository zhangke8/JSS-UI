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

import com.kss.app.exceptions.ProductNotFoundException;
import com.kss.app.model.Product;
import com.kss.app.repositories.ProductRepository;

@RestController
public class ProductContoller {

	@Autowired
	ProductRepository productRepository;
	
	@PostMapping("/products/")
	public ResponseEntity<Object> save(@RequestBody Product product){
		
		productRepository.save(product);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().fromPath("/{id}").buildAndExpand(product.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping("/products/")
	public List<Product> findAll(){
		
		return productRepository.findAll();
	}
	
	@GetMapping("/products/{id}/")
	public Product findProductById(@PathVariable int id){
		Optional<Product> product =  productRepository.findById(id);
		
		if(!product.isPresent()){
			throw new ProductNotFoundException("{id} - "+id);
		}
		
		return product.get();
	}
	
	@DeleteMapping("products/{id}/")
	public void delete(@PathVariable int id){
		productRepository.deleteById(id);
	}
}
