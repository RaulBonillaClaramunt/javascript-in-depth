/*
    1. Create a function called "constructDOM" that takes a single
       Object as it's argument.

    2. The Object passed in simulates a simple DOM Object from the
       Browser. Each Node has 3 possible properties:
       - childNodes (Array of Nodes)
       - nodeName (String - Type/Name of the Node, eg: p, div, h1)
       - innerText (String - Actual Content in between the node tags)//BASE CASE

    3. Use recursion to re-construct the HTML in the correct order
       given the DOM Object passed in and all the children inside.

    * You can assume if a Node has "innerText" that it's a Child
      node (no further childNodes under it)
    * You can also assume that all tags have a start and end tag
      Eg: <p> _innerText_content_in_here_ </p>
    * Do not worry about the indentation/spacing, the result String
      should all be on one line/single string

    Example:
    // console.log(constructDOM(document));
    // (on one line, no indents, the spacing is for clarity):
    // <html>
    //   <head>
    //     <script>console.log('hi');</script>
    //   </head>
    //   <body>
    //     <ul>
    //       <li>
    //         <b>Home</b>
    //       </li>
    //       <li>Blog</li>
    //       <li>About</li>
    //     </ul>
    //     <div>
    //       <h1>My Blog</h1>
    //       <p>Welcome to my blog!</p>
    //     </div>
    //   </body>
    // </html>

*/

const document = {
    childNodes: [
      {
        nodeName: "html",
        childNodes: [
          {
            nodeName: "head",
            childNodes: [
              {
                nodeName: "script",
                innerText: "console.log('hi');",//bottom
              },
            ],
          },
          {
            nodeName: "body",
            childNodes: [
              {
                nodeName: "ul",
                childNodes: [
                  {
                    nodeName: "li",
                    childNodes: [
                      {
                        nodeName: "b",
                        innerText: "Home",//bottom
                      },
                    ],
                  },
                  {
                    nodeName: "li",
                    innerText: "Blog",//bottom
                  },
                  {
                    nodeName: "li",
                    innerText: "About",//bottom
                  },
                ],
              },
              {
                nodeName: "div",
                childNodes: [
                  {
                    nodeName: "h1",
                    innerText: "My Blog",//bottom
                  },
                  {
                    nodeName: "p",
                    innerText: "Welcome to my blog!",//bottom
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const constructionDOM = (object) => {
    let reconstructed = '';

    if (object.innerText) {//BASE CASE
      //reconstructed += object['innerText'] + '</' + object['nodeName'] + '>';
      return object.innerText;
    }

    for (let key in object) {
      if (object.nodeName) {
        //console.log(key);
        reconstructed += ('<' + object['nodeName'] + '>');
      }
      if (object.childNodes) {
        //reconstructed += constructionDOM(object['childNodes']);
        const childNoded = constructionDOM(object.childNodes);
        for (const childNodes of object.childNodes) {

        }
      }

    }

    return reconstructed;
  }

  console.log(constructionDOM(document));
