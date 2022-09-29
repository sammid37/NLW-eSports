package com.sammid37.louie.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Supplies {
    @Id
    @GeneratedValue
    
    private int id; 
    private String url; // image
    private String name;
    private String description;
    private String brand;
    private String grade; 
    private float price;
    //* remember to add image propertie
    
    // methods GET and SET of the Art Supplies
    // ID
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    // Image file
    public String getURL() {
        return url;
    }
    public void setURL(String url) {
        this.url = url;
    }

    // Name, example: hot press water color paper
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // description
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    // brand, example: pentel, faber-castell, uni mitsubishi, canson
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
    
    // price
    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }
}