package tests;

import com.controllers.DefaultController;
import com.model.RestClient;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

/**
 *
 * @author Vivar
 */

public class JUnitTests
{
    private DefaultController controller;
    private RestClient restClient;
    
    @Before
    public void setUp()
    {
        restClient = Mockito.mock(RestClient.class);
        controller = new DefaultController();
        controller.dependencyInject(restClient);
    }
    
    @Test
    public void controllerTest()
    {
        Mockito.when(restClient.getRespuesta()).thenReturn("Respuesta simulada");
        Object response = controller.index();
        Assert.assertEquals("Respuesta simulada", response.toString());
    }
}
