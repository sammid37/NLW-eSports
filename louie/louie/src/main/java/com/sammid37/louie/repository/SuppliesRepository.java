package com.sammid37.louie.repository;

import com.sammid37.louie.model.Supplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuppliesRepository extends JpaRepository<Supplies,Integer> {
    
}
