const createDOMPurify = require('dompurify')
//const { JSDOM } = require('jsdom')

//const window = new JSDOM('').window
const DOMPurify = createDOMPurify()

const options = {
    FORCE_BODY: true,
    ALLOWED_ATTR: ['style', 'class', 'type', 'href', 'rel'],
}

export const getHtml = (content: string) => {
    return DOMPurify.sanitize(`
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="">
    
        </head>
        <body>

            <div>
            <ul>
                ${content}
            </ul>    
            </div>
        </body>
    </html>
    `,
        {...options})
}