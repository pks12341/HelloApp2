package org.yedam.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;


public class BookServiceImpl implements BookService {
	DataSource dataSource = DataSource.getInstance();
	Connection conn = dataSource.getConnection();
	PreparedStatement psmt;
	ResultSet rs;

	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		String sql = "select * from BOOK";

		conn = dataSource.getConnection();
		try {
			
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				BookVO vo = new BookVO();
				vo.setBook_code(rs.getString("book_code"));
				vo.setBook_title(rs.getString("book_title"));
				vo.setBook_author(rs.getString("book_author"));
				vo.setBook_press(rs.getString("book_press"));
				vo.setBook_price(rs.getString("book_price"));
				books.add(vo);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (psmt != null)
					psmt.close();
				if (conn != null)
					conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return books;

	}

}