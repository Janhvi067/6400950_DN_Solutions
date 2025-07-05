package com.library.service;

import com.library.repository.BookRepository;
import com.library.config.AppConfig;

public class BookService {
    private BookRepository bookRepository;
    private AppConfig appConfig;

    // Constructor for AppConfig (Constructor Injection)
    public BookService(AppConfig appConfig) {
        this.appConfig = appConfig;
        System.out.println("[Service] Constructor injection of AppConfig");
    }

    // Setter for BookRepository (Setter Injection)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[Service] Setter injection of BookRepository");
    }

    public void addBook(String name) {
        appConfig.setup();
        System.out.println("[Service] Adding book: " + name);
        bookRepository.saveBook(name);
    }
}
