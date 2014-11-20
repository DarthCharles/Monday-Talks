/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package monday_talks;

/**
 *
 * @author Admin
 */
public class Monday_Talks {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
     Peliculas Peliculas_Chidas = new Peliculas();
    
     Peliculas_Chidas = null;
     
        for (int i = 0; i < Peliculas_Chidas.getPeliculas().size(); i++) {
            System.out.println(Peliculas_Chidas.getPeliculas().get(i + 1));
        }
     
        Peliculas_Chidas.addPelicula("The Others");
        Peliculas_Chidas.deletePelicula("V for Vendetta");
  
        int random =  (int)(Math.random() * Peliculas_Chidas.getPeliculas().size());
        System.out.println("La pelicula más chida es " + Peliculas_Chidas.getPeliculas().get(random) );
         
    
    }
    
}
