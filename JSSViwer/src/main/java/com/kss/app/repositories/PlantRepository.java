package com.kss.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kss.app.model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer>{

}
