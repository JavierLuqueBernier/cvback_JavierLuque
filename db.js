const mongoose = require('mongoose');

const urlMongo = 'redis://h:p74a9fd13efef9cdd78c037427107133da8cfa4372639f75d06dcb4a46f03e6ab@ec2-54-220-24-58.eu-west-1.compute.amazonaws.com:27539';

mongoose.connect(urlMongo);