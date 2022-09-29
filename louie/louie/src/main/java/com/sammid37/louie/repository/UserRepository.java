package com.sammid37.louie.repository;

import com.sammid37.louie.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    
}
