var express = require('express');
var passport = require('passport');
var httpProxy = require('http-proxy');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
var router = express.Router();

var proxy = httpProxy.createProxyServer({
  target: {
      host: process.env.SHINY_HOST,
      port: process.env.SHINY_PORT
    }
});

proxy.on('error', function(e) {
  console.log('Error connecting');
  console.log(e);
});

var setIfExists = function(proxyReq, header, value){
  if(value){
    proxyReq.setHeader(header, value);
  }
}

/* Proxy all requests */
router.all(/.*/, ensureLoggedIn, function(req, res, next) {
  proxy.web(req, res);
});

module.exports = router;
