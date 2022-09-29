package com.sammid37.louie.exception;

public class SuppliesNotFoundException extends RuntimeException {
    public SuppliesNotFoundException(int id) {
        super("Could not find the #" + id + " art supply.");
    }
    
}
