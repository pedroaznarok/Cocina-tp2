/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.controllers;

import com.example.demo.entities.IngredienteCantidad;
import com.example.demo.entities.Plato;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gerardo
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PlatoController {
    
    @RequestMapping(value = "prueba")
    public String prueba(){
        return "PRUEBA SPRING BOOT";
    } 
    
    @GetMapping("prueba2")
    public String prueba2(){
        return "PRUEBA 2 SPRING BOOT";
    } 
    
    String urlConexion = "jdbc:mysql://localhost:3306/react";
    String usuario = "root";
    String clave = "mysql";
    
    @GetMapping("api/platos")
    public List<Plato> getPlatosDataBaseJSON(){
        System.out.println("getPlatosDataBaseJSON");
        return getPlatosDataBase();
    }
    
    @RequestMapping(value = "api/getPlatosDataBase")
    public List<Plato> getPlatosDataBase(){
    
        ResultSet rs = null;
        List<Plato> platos = new ArrayList<Plato>();
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("select * from react.platos");
            while (rs.next()) {
                Plato plato = new Plato();
                plato.setId(Long.parseLong(rs.getString("id")));
                plato.setNombre(rs.getString("nombre"));
                plato.setImagenPath(rs.getString("imagenPath"));
                plato.setPrecio(rs.getString("precio"));
                plato.setRubro(rs.getString("rubro"));
                platos.add(plato);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return platos;

    
    } 
    
    @GetMapping("api/platoxid/{id}")
    public Plato getPlatoDataBaseXIdJSON(@PathVariable String id){
        return getPlatoDataBaseXId(Long.parseLong(id));
    }
    
    public Plato getPlatoDataBaseXId(long idPlato){
    
        ResultSet rs = null;
        Plato plato = new Plato();
            
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("SELECT * from plato WHERE id = " + idPlato);
            while (rs.next()) {
                plato.setId(Long.parseLong(rs.getString("id")));
                plato.setNombre(rs.getString("nombre"));
                plato.setImagenPath(rs.getString("imagenPath"));
                plato.setPrecio(rs.getString("precio"));
                plato.setRubro(rs.getString("rubro"));
            }
            
            rs = s.executeQuery("SELECT * FROM plato_ingrediente AS pin INNER JOIN ingrediente i ON pin.idingrediente = i.id " +
                                "WHERE pin.idplato = " + idPlato);
            while (rs.next()) {
                IngredienteCantidad ingCant = new IngredienteCantidad();
                ingCant.setIdIngrediente(Long.parseLong(rs.getString("idingrediente")));
                ingCant.setCantidad(rs.getDouble("cantidad"));
                ingCant.setNombre(rs.getString("nombre"));
                ingCant.setUnidadMedida(rs.getString("unidadMedida"));
                plato.addIngrediente(ingCant);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return plato;
    }
    
    
    public List<Plato> getPlatoDataBaseXTermino(String termino){
    
        ResultSet rs = null;
        List<Plato> platos = new ArrayList<Plato>();
            
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("SELECT * from plato WHERE nombre LIKE '%" + termino + "%'");
            while (rs.next()) {
                Plato plato = new Plato();
                plato.setId(Long.parseLong(rs.getString("id")));
                plato.setNombre(rs.getString("nombre"));
                plato.setImagenPath(rs.getString("imagenPath"));
                plato.setPrecio(rs.getString("precio"));
                plato.setRubro(rs.getString("rubro"));
                platos.add(plato);
            }
            
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return platos;
    }
    
   
    public Plato insertarPlato(Plato plato) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            PreparedStatement ps = conexion.prepareStatement("INSERT INTO plato(nombre, imagenPath, precio, rubro) VALUES (?, ?, ?, ?)");

            // Se establecen los par??metros y se ejecuta la sentencia.
            ps.setString(1, plato.getNombre());
            ps.setString(2, plato.getImagenPath());
            ps.setString(3, plato.getPrecio());
            ps.setString(4, plato.getRubro());
            
            int affectedRows = ps.executeUpdate();
            if (affectedRows == 0) {
                    throw new SQLException("No se pudo guardar");
            }
            //recupero el ultimo id
            ResultSet generatedKeys = ps.getGeneratedKeys();
            long idGenerado = 0;
            if (generatedKeys.next()) {
                idGenerado = generatedKeys.getLong(1);
            }
            return this.getPlatoDataBaseXId(idGenerado);
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }

    }

    
    public Plato actualizarPlato(Plato plato) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            PreparedStatement ps = conexion.prepareStatement("UPDATE plato SET nombre = ?, imagenPath = ?, precio = ?, rubro = ? WHERE id = ?");
            ps.setString(1, plato.getNombre());
            ps.setString(2, plato.getImagenPath());
            ps.setString(3, plato.getPrecio());
            ps.setString(4, plato.getRubro());
            ps.setLong(5, plato.getId());
            ps.executeUpdate();
            
            return this.getPlatoDataBaseXId(plato.getId());

        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }
    }
     
    
    public void eliminarPlato(Long platoId) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            Statement st = conexion.createStatement();
            String sql = "DELETE FROM plato WHERE id = " + platoId;
            int delete = st.executeUpdate(sql);

            if (delete == 1) {
                System.out.println("plato Borrado");
            } else {
                System.out.println("plato no Borrado");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    
    
    
    
}
