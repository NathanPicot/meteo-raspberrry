import http.server

server_address = ('', 8000)

handler_class = http.server.SimpleHTTPRequestHandler
handler_class.extensions_map['.html'] = 'text/html'
httpd = http.server.HTTPServer(server_address, handler_class)

print('Serveur démarrer')

httpd.serve_forever()


