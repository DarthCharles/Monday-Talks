/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package monday_talks;

import java.util.ArrayList;

/**
 *
 * @author Admin
 */
public class Nombres {

    public Nombres() {
       this.initNombres();
    }
    
    private ArrayList<String> Nombres;
    
    private void initNombres(){
          this.Nombres = new ArrayList<String>();
          Nombres.add("MyName");
          Nombres.add("Carlos");
    }
    
    public void greet(){
        
        for (String Nombre : Nombres) {
            System.out.println("Hello " + Nombre);
        }
    }
    
    
    public static void main(String[] args) {
        
        Nombres lista = new Nombres();
        lista.greet();
    }
}
