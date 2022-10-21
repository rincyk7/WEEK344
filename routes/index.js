/*
Name: Rincy Kuriakose
Date: 10.14.2022
Student id: 301217536

This is the index.js page for my portfolio of web development work. It includes links to
side projects I have done for COMP 229, including an AboutMe page, a Projects,Services and 
a contact pages.
-->*/
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' },


  );
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/Services', function (req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/Contact', function (req, res, next) {
  res.render('Contact', { title: 'Contact' });
});
module.exports = router;
