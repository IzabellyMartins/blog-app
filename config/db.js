if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://registro:izabelly2031@registro.ae2r6bb.mongodb.net/"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}