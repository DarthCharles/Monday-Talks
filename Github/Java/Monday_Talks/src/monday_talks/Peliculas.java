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
public class Peliculas {

    private ArrayList<String> Peliculas;

    public Peliculas() {
        this.initPeliculas();
    }

    private void initPeliculas() {
        this.Peliculas = new ArrayList<String>();
        Peliculas.add("Star Wars Episode III");
        Peliculas.add("V for Vendetta");
        Peliculas.add("Pulp Fiction");
        Peliculas.add("The Girl of the Dragon Tatoo");
        Peliculas.add("X-Men");
        Peliculas.add("Scarface");
        Peliculas.add("American History X");
        Peliculas.add("Fight Club");
    }

    public ArrayList<String> getPeliculas() {
        return Peliculas;
    }

    public void addPelicula(String name) {
//        Method implementation goes HERE
    }

    public void deletePelicula(String name) {
//        Method implementation goes HERE
    }
}
