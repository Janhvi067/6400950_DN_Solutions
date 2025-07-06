
package org.example;

import org.example.dao.UserDao;
import org.example.entity.User;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        // loading hibernate configuration and building session factory
        SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

        //creating a dao instance
        UserDao userDao = new UserDao(sessionFactory);

        // create and save a new user
        User newUser = new User();
        newUser.setName("Ajay");
        newUser.setEmail("abcd@gmail.com");
        userDao.SaveUser(newUser);

        // fetch the user by id
        User fetchedUser = userDao.getUserByID(newUser.getId());
        System.out.println("Fetched User: " + fetchedUser.getName() + ", " + fetchedUser.getEmail());

        // closing the session factory
        sessionFactory.close();

    }
}
