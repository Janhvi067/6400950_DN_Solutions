package org.example.dao;

import org.example.entity.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

// this is a data access object class that uses hibernate to interact with database
public class UserDao {

    private SessionFactory sessionFactory;

    public UserDao(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public User getUserByID(int id) {
        Session session = sessionFactory.openSession(); // opening a session
        User user = session.get(User.class , id); // fetching the data
        session.close();
        return user;
    }

    public void SaveUser(User user) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction(); // begin transaction
        session.save(user); // saving the user object
        tx.commit(); // commit the transaction
        session.close();
    }
}
