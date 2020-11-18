var mongoose = require('mongoose');
var express = require('express');
const Post = require('../models/posts');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Backend'
	});
});

router.get('/api/posts', (req, res) => {
	Post.find({}, (err, data) => {
		if (err) res.send(err);
		data.reverse(); // latest posts first
		res.send(data);
	})
})

router.get('/api/posts/:id', (req, res) => {
	let post = Post.findOne({
		_id: req.params.id
	}, (err, data) => {
		res.render('viewer', {
			title: "Post",
			posts: [data],
		})
	})
});


router.put('/api/posts/:id', (req, res) => {
	Post.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
		err ? console.log(err) : res.send(data);
	});
});


router.post('/api/posts', (req, res) => {
	let post = new Post(req.body);
	post.save((err) => {
		console.log(err);
		res.send(post);
	})
});

router.delete('/api/posts/:id', (req, res) => {
	Post.deleteOne({
		"_id": req.params.id
	}, (err, data) => {
		if (err) res.send(err);
		res.send(data);
	})
})

module.exports = router;