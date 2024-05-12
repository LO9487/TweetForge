/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template/lxw
 */
package login.register;

/**
 *
 * @author ASUS
 */

public class User {//create user file to store the userName and password
    private String userName;
    private String password;
    private String email;
    
    public User(String userName,String password,String email){
        this.password=password;
        this.userName=userName;
        this.email=email;
    }

    User() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void getPassword(){
        this.password=password;
    }
    public String setPassword(){
        return password;
    }

    public void getUserName(){
        this.userName=userName;
    }
    public String setUserName(){
        return userName;
    }
    
    public void getEmail(){
        this.email=email;
    }
    public String setEmail(){
        return email;
    }
    
    @Override
    public String toString(){
        return userName+","+password+","+email;
    }
}
