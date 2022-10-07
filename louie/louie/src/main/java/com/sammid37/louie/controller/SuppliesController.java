package com.sammid37.louie.controller;

import com.sammid37.louie.exception.SuppliesNotFoundException;
import com.sammid37.louie.model.Supplies;
import com.sammid37.louie.repository.SuppliesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
// @CrossOrigin("http://127.0.0.1:5173")
public class SuppliesController {
    @Autowired
    private SuppliesRepository suppliesRepository;

    // View all art supplies
    @GetMapping("/louie")
    List<Supplies> getAllSupplies() {
        return suppliesRepository.findAll();
    }

    // Register new art supplie
    @PostMapping("/louie/create")
    Supplies newSupplies(@RequestBody Supplies newSupplies) {
        return suppliesRepository.save(newSupplies);
    }

    // View a specefic art supplies by ID
    
    @GetMapping("/louie/{id}")
    Supplies getSuppliesById(@PathVariable int id) {
        return suppliesRepository.findById(id).orElseThrow(() -> new SuppliesNotFoundException(id));
    } 
    @PutMapping("/louie/{id}")
    Supplies updateSupplies(@RequestBody Supplies newSupplies, @PathVariable int id) {
        return suppliesRepository.findById(id)
            .map(supply -> {
                supply.setURL(newSupplies.getURL());
                supply.setName(newSupplies.getName());
                supply.setDescription(newSupplies.getDescription());
                supply.setBrand(newSupplies.getBrand());
                supply.setGrade(newSupplies.getGrade());
                supply.setCategory(newSupplies.getCategory());
                supply.setPrice(newSupplies.getPrice());

                return suppliesRepository.save(supply);
             }).orElseThrow(() -> new SuppliesNotFoundException(id));
    }

    @DeleteMapping("/louie/{id}")
    String deleteSupplies(@PathVariable int id) {
        if(!suppliesRepository.existsById(id)) {
            throw new SuppliesNotFoundException(id);
        }
        suppliesRepository.deleteById(id);
        return "Art supply with id #"+id+" has been deleted succesfully.";
    }
}
