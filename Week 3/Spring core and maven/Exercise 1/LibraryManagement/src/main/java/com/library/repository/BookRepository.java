package com.library.repository;

public class BookRepository {
    public void saveBook(String bookName) {
        System.out.println("[Repository] Saving book: " + bookName);
    }
}
