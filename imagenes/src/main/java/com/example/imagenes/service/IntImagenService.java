package com.example.imagenes.service;

import java.util.List;
import java.util.UUID;

import com.example.imagenes.models.Imagen;

public interface IntImagenService {
    List<Imagen> leerImagen();
    Imagen addImage(Imagen nuevaImagen);
    void eliminarImagen(UUID id);
}
