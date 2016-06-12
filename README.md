# Thinkexpedite web site

Thinkexpedite has created a very simple bootstrap static site site that is deployed to an AWS S3 bucket.
### Version
1.0.0.

### Tech

Thinkexpedite uses a number of open source projects to work properly:

* [node.js] - deployment to S3 bucket 

And of course Thinkexpedite itself is open source with a [public repository][Thinkexpedite]
 on GitHub.

### Deployment to AWS S3

Thinkexpedite requires [Node.js](https://nodejs.org/) v4+ to deploy.

You need aws-sdk & NodeJS installed globally:

```sh
$ npm install
```

```sh
$ git clone [git-repo-url] thinkexpedite.com
$ cd thinkexpedite.com
$ npm i -d
$ cd deploy
node .\deploy.js [options: all | index | js | css | images | createBucket
```
NB S3 Bucket is hard-coded to ThinkExpedite.com

License
----

MIT



   [Thinkexpedite]: <https://github.com/thinexpediter>
   [node.js]: <http://nodejs.org>
  
