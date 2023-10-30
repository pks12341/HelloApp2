package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.serviceImpl.BookServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class MemberListServlet
 */
@WebServlet("/BookListServ")
public class BookListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		BookService svc =new BookServiceImpl();
		List<BookVO> list = svc.bookList();
		System.out.println(list);
		
		response.setContentType("text/json;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
		
		String Json=gson.toJson(list);
			
		out.print(Json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}