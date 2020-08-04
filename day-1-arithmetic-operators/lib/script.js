'use strict';

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    if(length >= 1 && width <= 1000){
        area = (length * width);
        return area;
    } else {
        return "Error length is less than 1 width is greater than 1000"
    }
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    if(length >= 1 && width <= 1000){
        perimeter = 2*(length + width);
        return perimeter;
    } else {
        return "Error length is less than 1 width is greater than 1000"
    }
}