package com.rolymagne.crud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private Date joinDate;
    private Double balance;

    public User() {
    }

    public User(String userName, String firstName, String lastName, Date birthDate, Date joinDate, Double balance) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.joinDate = joinDate;
        this.balance = balance;
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate=" + birthDate +
                ", joinDate=" + joinDate +
                ", balance=" + balance +
                '}';
    }
}
