package com.example.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "carts")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동증가값 애노테이션
    private int id;

    @Column
    private int memberId;

    @Column
    private int itemId;
}
