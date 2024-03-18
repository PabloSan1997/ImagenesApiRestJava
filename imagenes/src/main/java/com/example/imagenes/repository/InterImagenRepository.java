package com.example.imagenes.repository;

import java.util.List;
import java.util.UUID;

import com.example.imagenes.models.Imagen;

public interface InterImagenRepository {
    List<Imagen> leerImagenes();
    Imagen addNewImage(Imagen nuevaImagen);
    void eliminarImagen(UUID id);
}

