'use strict';

require('dotenv').config();

let should = require('should'),
  NewsAPI = require('../src/models/newsAPI/newsApiModel');

if (!process.env.REACT_APP_API_KEY) throw new Error('No API Key specified. Please create an environment variable named API_KEY');
let newsapi = new NewsAPI(process.env.REACT_APP_API_KEY);

describe('NewsAPI', function () {

    describe('sources', function () {
      it('Should return "ok" and a list of sources', function (done) {
        newsapi.v2.sources().then(res => {
          res.status.should.equal('ok');
          should.exist(res.sources);
          done();
        }).catch(done);
      });
    });

    describe('top-headlines', function () {
      it('Should return "ok" and a list of top headlines', function (done) {
        newsapi.v2.topHeadlines({
          language: 'en'
        }).then(res => {
          res.status.should.equal('ok');
          should.exist(res.articles);
          done();
        }).catch(done);
      });

      it('Should return "ok" and a list of top headlines using a callback', function (done) {
        newsapi.v2.topHeadlines({
          language: 'en'
        }, (err, res) => {
          if (err) {
            return done(err);
          }
          res.status.should.equal('ok');
          should.exist(res.articles);
          done();
        });
      });

      it('Should default to english language if not provided and return a list of top headlines', function (done) {
        newsapi.v2.topHeadlines(
            {
             country : 'us'
            }).then(res => {
          res.status.should.equal('ok');
          should.exist(res.articles);
          done();
        }).catch(done);
      });

      it('Should throw an error if all required params are missing', function (done) {
        newsapi.v2.topHeadlines({})
          .then(res => {
            done(new Error('This should have thrown an error'));
          })
          .catch((err) => {
            done()
          });
      });
    });

    describe('everything', function () {
      it('Should return "ok" and a list of articles', function (done) {
        newsapi.v2.everything({
          q: 'spain'
        }).then(res => {
          res.status.should.equal('ok');
          should.exist(res.articles);
          done();
        }).catch(done);
      });

      it('Should not cache results if noCache is on', function (done) {
        newsapi.v2.everything({
          q: 'spain'},{
          noCache: true,
          showHeaders: true
        }).then(res => {
          res.headers['x-cached-result'].should.equal('false');
          res.body.status.should.equal('ok');
          should.exist(res.body.articles);
          done();
        }).catch(done);
      });

      it('Should throw an error if all required params are missing', function (done) {
        newsapi.v2.everything({})
          .then(res => {
            done(new Error('This should have thrown an error'));
          })
          .catch((err) => {
            done()
          });
      });
    });
});