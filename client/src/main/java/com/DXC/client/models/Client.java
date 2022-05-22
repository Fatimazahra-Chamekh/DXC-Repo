package com.DXC.client.models;
import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {
    // generate the id
    // this is use in when adding a new client
    @Id
    @SequenceGenerator(
            name = "client_index",
            sequenceName = "contrat_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_index"
    )
    private int id;
    private String nomClient;
    private String market;

    public Client() {
    }

    public Client(int id,String nomClient, String market) {
        this.id = id;
        this.nomClient = nomClient;
        this.market = market;
    }

    public Client( String nomClient, String market) {
        this.nomClient = nomClient;
        this.market = market;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomClient() {
        return nomClient;
    }

    public void setNomClient(String nomClient) {
        this.nomClient = nomClient;
    }
    public String getMarket() {
        return market;
    }

    public void setMarket(String market) {
        this.market = market;
    }
}