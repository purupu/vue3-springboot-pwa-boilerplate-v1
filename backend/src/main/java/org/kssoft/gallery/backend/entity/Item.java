package org.kssoft.gallery.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length=50, nullable=false)
    private String name;

    @Column(length=100)
    private String imgPath;

    @Column(length=100)
    private String price;

    @Column()
    private int discountPer;


}
