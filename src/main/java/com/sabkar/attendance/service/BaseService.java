package com.sabkar.attendance.service;

import com.sun.istack.NotNull;

import java.util.List;

public interface BaseService<T, K> {

    @NotNull
    List<T> findAll();

    @NotNull
    T findById(K id);

}
