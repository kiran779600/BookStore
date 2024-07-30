import Book from "../model/book.model.js";


export const getBook = async( req, res) =>{
    try {
        
        const book = await Book.find();
        //outer server 200
        res.status(200).json(book);
    } catch (error) {
        console.log("Error:", error)
        //internal server 500
        res.status(500).json(error);
    }
}