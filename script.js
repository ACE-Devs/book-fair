let books = [
    ["Julian and the Elephant", "https://cdn01.sapnaonline.com/product_media/9789383928521/md_9789383928521.jpg", "", "elephant angel stories camping"],
    ["Amelia Bedelia and the Cat", "https://i.harperapps.com/covers/9780060843519/x400.jpg", "", "cat amelia bedelia rain"],
    ["How to Be Cool in the Third Grade", "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780590988674/primary/renditions/700", "", "third grade cool school new"],
    ["Scientists", "https://nationalbookswap.com/pbs/l/15/6015/9780439046015.jpg", [150, 100], "scientists study work"],
    ["Is That Robot Really My Doctor?", "https://cdn10.bigcommerce.com/s-68d6g77/products/80290/images/145853/TQAB-RobotRDoctor__85100.1523877273.250.250.jpg?c=2", "", "question answer robot doctor"],
    ["The Race", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308536352i/7498718.jpg", "", "cars race wheel"],
    ["Arthur's Great Big Valentine", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1184798271i/1530967.jpg", "", "arthur big valentine"],
    ["Winter Ice is Nice", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328844187i/1227308.jpg", "", "cliffor dog ice winter"],
    ["Pete and Perky", "https://pictures.abebooks.com/isbn/9781887942621-us.jpg", "", "hooked on phonics pete perky"],
    ["Piglet Meets a Heffalump", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1214377803i/3541463.jpg", "", "winnie the pooh piglet"],
    ["Elmo's Mother Goose", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJaz0G5tLye9fxktcf9Q-7mITJdHJjtzEAaIJMoOYow&s", "", "elmo sesame street nursery rhymes"],
    ["Elmo's Guessing Game", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1182165784i/1238740.jpg", "", "elmo sesame street guessing game"],
    ["Start Your Engines", "https://m.media-amazon.com/images/I/91FTM33qiNL._SY342_.jpg", "", "hot wheels cars engines"],
    ["Little Jack Horner", "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780545414401/primary/renditions/700", [150, 140], "nursery rhymes little jack horner corner"],
    ["Ducks in Muck", "https://books.google.com.sa/books/content?id=8p8NAAAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71xySlaZq3fWbZmIdQ5xwCFkhapH-vQxS4jnKL1AGCWdkoagoVbrT51nWGI05e_uuvJQcY2PBAqwMScZRSI5aUgXL2uqVRt14GlreNVwNal9fspvx4-pV5mj5dmDdY4CH57ZmaK", "", "duck kuck mud stuck"],
    ["Mrs. Brice's Mice", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1406511439i/110599.jpg", "", "mice mouse rat mrs girl"],
    ["Clever Oliver!", "https://m.media-amazon.com/images/I/51PZ2flw8KL._AC_UF350,350_QL50_.jpg", [150, 100], "thomas the train"],
    ["Toy Trouble", "https://i.thriftbooks.com/api/imagehandler/m/1582DB44199C0671F9442D48B5069D505D827B0A.jpeg", [150,150], "toy story 3 toys"],
    ["The Neverending Story", "https://i.ebayimg.com/images/g/EBIAAOSwcxdjmBxI/s-l1600.jpg", [150, 140], "story infinite never end picture album"],
    ["Little Boy Blue", "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780545414302/primary/renditions/700", [150, 140], "nursery rhymes boy blue"],
    ["Dora in the Deep Sea", "https://books.google.com.sa/books/content?id=1FBOPgAACAAJ&printsec=frontcover&img=1&zoom=1&h=160&stbn=1", "", "dora the explorer boots pirate pig"],
    ["Snow White & The Seven Dwarfs", "https://i0.wp.com/booknook.store/wp-content/uploads/2018/04/snow-white2.jpg?w=365&ssl=1", "", "snow white fairy tales"],
    ["Good Night, Gorilla", "https://pictures.abebooks.com/isbn/9780399239946-us.jpg", [150, 110], "gorilla bedtime story"],
    ["Duck on a Bike", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328870602i/920780.jpg", "", "duck animal story ride"],
    ["Digestion", "https://pictures.abebooks.com/isbn/9780764141300-us.jpg", [150, 130], "science education food body human"],
    ["Wedges and Screws", "https://m.media-amazon.com/images/I/41XvCoiV5SL._AC_UF1000,1000_QL80_.jpg", "", "science simple machines physics"],
    ["Wheels and Axles", "https://m.media-amazon.com/images/I/41BwiX4WghL._AC_UF1000,1000_QL80_.jpg", "", "science simple machines physics"],
    ["Batman's Friends and Foes", "https://m.media-amazon.com/images/I/61D4TGv1ROL._AC_UF894,1000_QL80_.jpg", "", "batman marvel dark knight bryce wayne joker"],
    ["Timmy and Tiger", "https://m.media-amazon.com/images/I/91o5nlYA0ZL._AC_UF1000,1000_QL80_.jpg", "", "hooked on phonics cat dog fire"],
    ["Grandpa's Sign", "https://demofree.sirv.com/nope-not-here.jpg", "", "yard sale sign boy broken"],
    ["James Goes Buzz, Buzz", "https://m.media-amazon.com/images/I/51DM5YN0VSL._AC_UF1000,1000_QL80_.jpg", "", "thomas and friends james bees"],
    ["Perry Speaks!", "https://m.media-amazon.com/images/I/51qQD-cCLrL._SY342_.jpg", "", "disney phineas and ferb"],
    ["The Best Seat in Second Grade", "https://m.media-amazon.com/images/I/91i4sBR-ZeL._SY342_.jpg", "", "school museum hamster"],
    ["Angel", "https://m.media-amazon.com/images/I/91qLj5fGPzL._SY342_.jpg", "", "the puppy place"],
    ["Flynn Saves the Day", "https://m.media-amazon.com/images/I/71qcw4C9MsL._SY342_.jpg", "", "thomas and friends day of the diesels"],
    ["Snowshoe Thompson", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1380496348i/2064712.jpg", "", "snow nevada mail"],
    ["The Snowman", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Wjogga0KDN2TLKRkk4Hro2lkMbaUuWccXUcbVA0x8A&s", [140, 150], "read with biff chip and kipper"],
    ["Who Stole the Cookies", "https://m.media-amazon.com/images/I/81Ci3TkAKDL._SY342_.jpg", "", "nursery rhymes"],
    ["Building Buddy", 'https://demofree.sirv.com/nope-not-here.jpg', "", "human body build robot school literacy by design"],
    ["Swim With Dolphins", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1364309311i/7136570.jpg", "", "skip and spin hooked on phonics"],
    ["The Big Game", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1364309697i/6520624.jpg", "", "slam and dunk hooked on phonics"],
    ["The Angel of Nitshill Road", "https://ia801703.us.archive.org/BookReader/BookReaderPreview.php?id=angelofnitshillr0000fine&subPrefix=angelofnitshillr0000fine&itemPath=/1/items/angelofnitshillr0000fine&server=ia801703.us.archive.org&page=leaf1&fail=preview&&scale=4&rotate=0", "", "plays bully"],
    ["I Can Trick a Tiger", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355116142i/3253936.jpg", [140,150], "read with biff chip and kipper"],
    ["Do I Look Funny to You", "", "", "hooked on phonics"]
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
        if (element[0].toLocaleLowerCase().includes(param.toLocaleLowerCase()) || element[3].toLocaleLowerCase().includes(param.toLocaleLowerCase())) {
            matchesQuery.push(element)
        }
    }

    document.getElementById("book_query").value = param

    console.log(matchesQuery)
    for (let i = 0; i < matchesQuery.length; i++) {
        if (matchesQuery[i][2] != "") {
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
        if (books[i][2] != "") {
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