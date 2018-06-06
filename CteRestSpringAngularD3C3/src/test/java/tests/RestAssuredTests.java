package tests;

import static io.restassured.RestAssured.*;
import static io.restassured.path.json.JsonPath.from;
import static org.hamcrest.Matchers.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import java.util.List;
import org.junit.Test;

/**
 *
 * @author Vivar
 */
public class RestAssuredTests
{
    Response response;
    
    public RestAssuredTests(){response = given().get("http://localhost:3000/granos/");}
    
    @Test
    public void restAssuredTest()
    {
        response.then()
                .statusCode(200)
                .body("date", hasItems(1640))
                .body("findAll { it.date < 1641 }.category", hasItems("Grain"))
                .body("item*.length().sum()", greaterThan(50))
                .contentType(ContentType.JSON)
                .assertThat().statusLine("HTTP/1.1 200 OK")
                .header("Content-Type", "application/json; charset=utf-8");
        
        List<String> dates = from(response.asString()).getList("findAll { it.amount > 1000 }.date");
        System.out.println("Años en que se produjeron más de 1000 unidades de algún tipo de grano: " + dates);
    }

    
}
