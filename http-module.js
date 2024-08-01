const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome')
   }

   if(req.url === '/about'){
    res.end('ABOUT PAGE')

   }
   
    res.end(`
        <h1>Oops!</h1>
         <p>We cant seem to find the page you are looking for</p>
          <a href ="/">Back Home </a>
          `)
    
})







// //"localhost:5000" typically refers to a web server running on the same computer (i.e., "localhost") on port 5000. In other words, it is the local address and port number where a web application or service is being hosted or served from.

server.listen(5000)  
