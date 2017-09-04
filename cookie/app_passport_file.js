var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: '12422@',
  resave: false,
  saveUnitialized: true,
  store: new FileStore();
}));

app.use(passport.initialize());
app.use(passport.session());

var users = [
  {
    username:'local:yde',
    password:'111'
    displayName:'YDE'
  }
];

app.get('/auth/login', (req,res)=>{
  var output = `
  <h1>Login</h1>
  <form action="/auth/login" method="post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
  <a href="/auth/facebook">facebook</a>
  `;
  res.send(output);
});

app.post('/auth/login', (req,res)=>{
  passport.authenticate(
    'local',
    {
      successRedirect: '/welcome',
      failureRedirect: '/auth/login',
      failureFlash: false
    }
  )
})


app.get('/auth/logout', (req,res)=>{
  req.logout();
  req.session.save(function(){
    res.redirect('/welcome');
  })
})

app.get('/welcome', (req,res)=>{

})

passport.serializeUser(function(user,done){
  console.log('serialize', user);
  done(null, user.authId);
})

passport.deserializeUser(function(user,done){

})

passport.use(new LocalStrategy(

));

app.post('/auth/register', (req,res)=>{

})
app.get('/auth/register', (req,res)=>{

});

app.listen(3003, function(){
  console.log('Connected 3003 port!!');
}
