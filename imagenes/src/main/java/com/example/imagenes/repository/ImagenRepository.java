package com.example.imagenes.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.imagenes.models.Imagen;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class ImagenRepository implements InterImagenRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Imagen> leerImagenes() {
        return entityManager.createQuery("FROM imagen").getResultList();
    }

    @Override
    public Imagen addNewImage(Imagen nuevaImagen) {
        return entityManager.merge(nuevaImagen);
    }

    @Override
    public void eliminarImagen(UUID id) {
        var imagen = entityManager.find(Imagen.class, id);
        entityManager.remove(imagen);
    }

    
    
}
