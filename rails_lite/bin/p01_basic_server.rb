require 'rack'

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    
    path_info = req.path_info

    res['Content-Type'] = 'text/html'
    res.write("#{path_info}")
    res.finish
end

Rack::Server.start(
    app: app,
    Port: 3000
)