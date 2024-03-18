package com.example.imagenes.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.imagenes.models.Imagen;
import com.example.imagenes.repository.InterImagenRepository;


@Service
public class ImagenService implements IntImagenService{


    @Autowired
    InterImagenRepository imagenRepository;

    @Override
    public List<Imagen> leerImagen() {
        return imagenRepository.leerImagenes();
    }

    @Override
    public Imagen addImage(Imagen nuevaImagen) {
       return imagenRepository.addNewImage(nuevaImagen);
    }

    @Override
    public void eliminarImagen(UUID id) {
        imagenRepository.eliminarImagen(id);
    }
    
}
