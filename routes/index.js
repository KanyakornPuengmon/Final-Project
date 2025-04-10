const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/login.html')));
router.get('/register', (req, res) => res.sendFile(path.join(__dirname, '../public/register.html')));
router.get('/reset-password', (req, res) => res.sendFile(path.join(__dirname, '../public/reset-password.html')));
router.post('/reset-password', (req, res) => res.redirect('/'));
router.get('/home', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));
router.get('/air-control', (req, res) => res.sendFile(path.join(__dirname, '../public/air-control.html')));
router.get('/status', (req, res) => res.sendFile(path.join(__dirname, '../public/status.html')));

module.exports = router;