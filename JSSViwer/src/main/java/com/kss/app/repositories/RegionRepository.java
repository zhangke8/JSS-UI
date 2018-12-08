package com.kss.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kss.app.model.Region;

@Repository
public interface RegionRepository extends JpaRepository<Region, Integer>{

}
