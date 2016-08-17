
package com.imooc;

import java.util.ArrayList;
import java.util.List;





public class ListTest {

	
	public List <Course> courses;
	
	public ListTest(){
		this.courses = new ArrayList<Course>();
	}	
	
	/**
	 * ������Course����ӱ�ѡ�γ�
	 */
	public void testAdd(){
		
		Course cr1 = new Course("1", "��ѧ����");
		courses.add(cr1);
		Course cr2 = new Course("2", "��ѧ����");
		courses.add(cr2);
	}
	public void testForEach() {
		for (Course cr : courses) {
			System.out.println(cr.id + ":" + cr.name);
		}
	}
	
	
	public List<Course> getAllCourseInfo() {
		// TODO Auto-generated method stub

		return this.courses;
	}

}
