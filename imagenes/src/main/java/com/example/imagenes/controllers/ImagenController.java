package com.example.imagenes.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.imagenes.models.Imagen;
import com.example.imagenes.service.IntImagenService;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "*")
public class ImagenController {
    
    @Autowired
    private IntImagenService imagenService;

    @RequestMapping(path = "/image", method = RequestMethod.GET)
    public List<Imagen> leerImagen(){
        return imagenService.leerImagen();
    }

    @RequestMapping(path = "/image", method = RequestMethod.POST)
    public Imagen agregarImagen(@RequestBody Imagen imagen){
        return imagenService.addImage(imagen);
    }

    @RequestMapping(path = "/image/{id}")
    public ResponseEntity<?> eliminarDatos(@PathVariable UUID id){
        imagenService.eliminarImagen(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
