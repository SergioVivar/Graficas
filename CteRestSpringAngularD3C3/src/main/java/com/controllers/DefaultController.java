package com.controllers;

import com.model.RestClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Vivar
 */
@Controller
public class DefaultController
{
    private RestClient restClient;
    
    public DefaultController()
    {
        this.restClient = new RestClient();
        restClient.consultarServicio();
    }
    
   @RequestMapping(value = "/", method = RequestMethod.GET)
   public String index(ModelMap map)
   {
       map.put("msg", "PRODUCCIÓN DE GRANOS EN ALEMANIA ENTRE 1640 Y 1688");
       return "index";
   }
   
   @RequestMapping(value = "/get", method = RequestMethod.GET)
   public @ResponseBody Object index(){return restClient.getRespuesta();}
   
    public void dependencyInject(RestClient restClient){this.restClient = restClient;}
}
