/**
 * 
 */
/**
 * @author Administrator
 *
 */
package XMLTOJSon;

import net.sf.json.JSON;
import net.sf.json.xml.XMLSerializer;

public class Test {
	 
    public static void main(String[] args) throws Exception {
            String xml = "<root><name tyape='tyape'>zhaipuhong</name><gender>male</gender><birthday><year>1970</year><month>12</month><day>17</day></birthday></root>";
            XMLSerializer xmlSerializer = new XMLSerializer(); 
            JSON json = xmlSerializer.read( xml ); 
            System.out.println( json.toString(2) );
    }
    
}
