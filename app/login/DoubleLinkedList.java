/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license/lxw
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package login.register;
/**
 *
 * @author ASUS
 */
public class DoubleLinkedList <E>{//create this class to easy find the userName and password, insert the user information
    private DNode<E> head,tail;
    private int size;
    
    public DoubleLinkedList(){
        
    }
    
    public void addHead(E e){
        DNode<E> node=new DNode<>(e,null,null);
        if(head.equals(null)){
            head=node;
            head.next=null;
        }else{
            node.next=head;
            head.prev=node;
            head=node;
        }
    }
    
    public void addTail(E e){
        DNode<E> node=new DNode<>(e,null,null);
        if(tail.equals(null)){
            addHead(e);
        }else{
            tail.next=node;
            node.prev=tail;
            tail=node;
        }
    }
    
    public void add(E e, int position){
        DNode<E> node=new DNode<>(e,null,null);
        DNode<E> ptr=new DNode<>(null,null,null);;
        
        if (position < 0 || position > size) {
        throw new IndexOutOfBoundsException("Invalid position: " + position);
        }else if(position==0){
            addHead(e);
        }else if(position==size){
            addTail(e);
        }else{
            for(int i=0;i<position;i++){
                ptr=ptr.next;
            }
            node.next=ptr.next;
            node.prev=ptr;
            ptr.next.prev=node;
            ptr.next=node;
            size++;
        }
    }
    
    public String findPassword(String userEmail){//find the password by the userEmail
        DNode<E> ptr=head;
        
        while(ptr!=null){
            String user=(String) ptr.element;
            String[] part=(user).split(",");
            String userName=part[0];
            String password=part[1];
            String email=part[2];
            while(userEmail.equals(email)){
                return password;
            }
            ptr=ptr.next; 
        }
        return null;
    }
}
