package com.model;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author Vivar
 */
//@JsonIgnoreProperties(ignoreUnknown = true)
public class RestClient
{
    private String respuesta;
    
    public void consultarServicio()
    {
        try
        {
            RestTemplate rt = new RestTemplate();
            setRespuesta(rt.getForObject("http://localhost:3000/granos", String.class, 200));
        }
        catch(RestClientException e) {System.out.println(e.getMessage());}
    }
    
    public String getRespuesta() {return respuesta;}
    public void setRespuesta(String respuesta) {this.respuesta = respuesta;}
}
