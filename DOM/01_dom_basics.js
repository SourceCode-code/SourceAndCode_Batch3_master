// DOM --> Docment Object Model


//html --> to provide structure
//css  --> to do styling
//js   --> to add logic



// working -->

// html --> send to browser --> (dom) interperts and shows code  --> browser

// what is dom -->

/**
 * 
 * dom is an interface that represnt the structure of the web page as a tree of object 

// dom allows us to 

1 access and mainpulate

2 changes in dynamic web pages 



KEY POINTS ->

HTML is converted into dom --> by the  browser 

the dom is not the html its representaion of html 

1 documnet nodes --> represent the entrie document ---> {this is the root of the document}


2 elements node --> represnts html elements --> { tags (body , head , p , h1,button,input)}

3 text nodes --> represent the text 

4 attribute node --> reprsent the attributes --> (id , class , type , src)

*/



/**
 * 
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Coding</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
                <div class="container">
                    <h1>Welcome to Source and Code</h1>
                    <button id="enterButton">Enter</button>
                    <button id="exitButton">Exit</button>
                    <p id="message"></p>
                </div>
                <script src="script.js"></script>
        </body>
    </html>
 */



/**
 * 
 * 
 * break down of html node 
 * 
 * (staring tag)    attribute=value              attribute=value           attribute=value     text          ending tag
 *< textarea        name="message"               class="feedback-input" placeholder="Comments"> hello  </textarea>
 */

 