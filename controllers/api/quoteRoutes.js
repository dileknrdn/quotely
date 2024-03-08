const router = require('express').Router();
const { Quote } = require('../../models');
const withAuth = require('../../utils/auth');

//this is where users will save quotes