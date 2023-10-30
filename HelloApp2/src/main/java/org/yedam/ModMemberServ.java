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
 * Servlet implementation class ModMemberServ
 */
@WebServlet("/ModMemberServ.html")
public class ModMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ModMemberServ() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		//수정처리하는 서블릿.
		//mid,pass,name,phone => db update 처리.
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		MemberVO vo = new MemberVO(mid,pass,name,phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
		
		Map<String, Object> map = new HashMap<>();
		map.put("retCode", "OK");
		
		if(svc.modifyMember(vo)) {
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
		
	


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
