package com.kss.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kss.app.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

}
