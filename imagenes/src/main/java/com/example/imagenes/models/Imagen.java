package com.example.imagenes.models;

import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity(name = "imagen")
@Table
public class Imagen {

    @Id
    @UuidGenerator
    @Getter @Setter @Column(name = "id")
    private UUID id;

    @Getter @Setter @Column(name = "name")
    private String name;

    @Getter @Setter @Column(name="url")
    private String url;
}


