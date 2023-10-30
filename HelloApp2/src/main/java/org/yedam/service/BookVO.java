package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookVO {
	private String book_code;
	private String book_title;
	private String book_author;
	private String book_press;
	private String book_price;
}