package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
//http://localhost:8080/helloWeb/AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9876-0987
@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//!!정말정말 중요해요 기억합시다!!
		
		//?mid=M009&pass=9999&name=Kim&phone=010-9876-0987
		//(mid,pass,name,phone) {mid....} 위와 넘기는 방식이 다르지만 의미는 같다
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		System.out.printf("%s %s %s %s",mid,pass,name,phone);
		//멤버 인스턴스 선언
		MemberVO vo = new MemberVO(mid,pass,name,phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
	
		
		
		//Map
		Map<String, Object> map = new HashMap<>();
		map.put("retCode", "OK");
		
		if(svc.addMember(vo)) {
			map.put("retCode", "OK");
			map.put("vo", vo);
			// {"retCode": "OK"}
			//("{\"retCode\": \"OK\"}");
	
		} else {
			// {"retCode:" "NG"}
		//{\"retCode\": \"NG\"}";
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
			
		}
		String json = gson.toJson(map);
		out.print(json);
	}	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}