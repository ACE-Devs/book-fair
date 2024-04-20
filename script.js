let books = [
    ["Julian and the Elephant", "https://cdn01.sapnaonline.com/product_media/9789383928521/md_9789383928521.jpg"],
    ["Amelia Bedelia and the Cat", "https://i.harperapps.com/covers/9780060843519/x400.jpg"],
    ["How to Be Cool in the Thrid Grade", "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780590988674/primary/renditions/700"],
    ["Scientists", "https://nationalbookswap.com/pbs/l/15/6015/9780439046015.jpg", [150, 100]],
    ["Is That Robot Really My Doctor?", "https://cdn10.bigcommerce.com/s-68d6g77/products/80290/images/145853/TQAB-RobotRDoctor__85100.1523877273.250.250.jpg?c=2"],
    ["The Race", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308536352i/7498718.jpg"],
    ["Arthur's Great Big Valentine", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1184798271i/1530967.jpg"],
    ["Winter Ice is Nice", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328844187i/1227308.jpg"],
    ["Pete and Perky", "https://pictures.abebooks.com/isbn/9781887942621-us.jpg"],
    ["Piglet Meets a Heffalump", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1214377803i/3541463.jpg"],
    ["Elmo's Mother Goose", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJaz0G5tLye9fxktcf9Q-7mITJdHJjtzEAaIJMoOYow&s"],
    ["Elmo's Guessing Game", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1182165784i/1238740.jpg"],
    ["Start Your Engines", "https://m.media-amazon.com/images/I/91FTM33qiNL._SY342_.jpg"],
    ["Little Jack Horner", "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780545414401/primary/renditions/700", [150, 140]],
    ["Ducks in Muck", "https://books.google.com.sa/books/content?id=8p8NAAAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71xySlaZq3fWbZmIdQ5xwCFkhapH-vQxS4jnKL1AGCWdkoagoVbrT51nWGI05e_uuvJQcY2PBAqwMScZRSI5aUgXL2uqVRt14GlreNVwNal9fspvx4-pV5mj5dmDdY4CH57ZmaK"],
    ["Mrs. Brice's Mice", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1406511439i/110599.jpg"],
    ["Clever Oliver!", "https://m.media-amazon.com/images/I/51PZ2flw8KL._AC_UF350,350_QL50_.jpg", [150, 100]],
    ["Toy Trouble", "https://i.thriftbooks.com/api/imagehandler/m/1582DB44199C0671F9442D48B5069D505D827B0A.jpeg"],
    ["The Neverending Story", "https://i.ebayimg.com/images/g/EBIAAOSwcxdjmBxI/s-l1600.jpg"]
]
if (document.title == "Book Fair Catalog") {
    booklist.innerHTML = displayBooks()
} 
else{
    let params = document.location.href.split("?")[1]
    let param = params.split("=")[1]
    param = param.split("+")
    param = param.join(" ")
    let booklist = document.getElementById("booklist")
    let text = ""
    let matchesQuery = []
    for (let index = 0; index < books.length; index++) {
        const element = books[index]
        if (element[0].toLocaleLowerCase().includes(param.toLocaleLowerCase())) {
            matchesQuery.push(element)
        }
    }
    
    document.getElementById("book_query").value = param

    console.log(matchesQuery)
    for (let i = 0; i < matchesQuery.length; i++) {
        if (matchesQuery[i].length == 3) {
            text += `<h4>${matchesQuery[i][0]}<button onclick="preorder('${matchesQuery[i][0]}')">Preorder</button></h4><img src="${matchesQuery[i][1]}" width=${matchesQuery[i][2][0]}, height=${matchesQuery[i][2][1]}>\n`

        } else {
            text += `<h4>${matchesQuery[i][0]}<button onclick="preorder('${matchesQuery[i][0]}')">Preorder</button></h4><img src="${matchesQuery[i][1]}" width=100, height=150>\n`
        }
    }
    if (matchesQuery.length = 0){
        booklist.innerHTML = `No results for "${param}"`
    }else
    {   booklist.innerHTML = text
    }
    
}
function displayBooks() {
    booklist = document.getElementById("booklist")
    text = ""
    for (let i = 0; i < books.length; i++) {
        if (books[i].length == 3) {
            text += `<h4>${books[i][0]}<button onclick="preorder('${books[i][0]}')">Preorder</button></h4><img src="${books[i][1]}" width=${books[i][2][0]}, height=${books[i][2][1]}>\n`

        } else {
            text += `<h4>${books[i][0]}<button onclick="preorder('${books[i][0]}')">Preorder</button></h4><img src="${books[i][1]}" width=100, height=150>\n`
        }
    }
    return text
}

function search() {
    search = document.getElementById("book_query").value
    search = search.split(" ")
    search = search.join("+")
    window.location.href = `search.html?s=${search}`
}
function preorder(bookname) {
    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdtmIWiIeu0Ok2hJKWcQrW6_-SLyjdFuEHkLgxthZScXuXWtA/viewform?usp=pp_url&entry.1178925871=${bookname}`)
}