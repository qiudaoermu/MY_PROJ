package Array;


import java.util.ArrayList;


import com.sun.org.apache.bcel.internal.generic.NEW;

public class ArrayLit {

	static void aa(){
		
		ArrayList aM = new ArrayList();
		aM.add(0,5);
		aM.add(1,3);
		aM.add(2,4);
		aM.add(3,5);
		for (int i = 0; i < aM.size(); i++) {
			System.out.println(aM.get(i));
		}
	}
	
	
}
