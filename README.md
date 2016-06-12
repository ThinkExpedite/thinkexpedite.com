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

Once an AWS account has been created the credentials to deploy to an S3 bucket need to be utilised correctly. There are 2 options that can be used to utilise the necessary credentials.

* Option 1
    * Save AWS credentials to %USER_PROFILE% \ .aws\credentials file 
    * use AWS command line Interface to create necessary profile
    * use this profile within javascript code to retrieve correct credentials
    
```python 
> $ aws configure
> AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
> AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
> Default region name [None]: us-west-2
> Default output format [None]: ENTER
```
``` javascript
aws.config.credentials = new aws.SharedIniFileCredentials({ profile: 'default' });
```

* Option 2
* Load credentials directly into an AWSConfig.json file in the project making sure NOT to deploy these credentials for others to access i.e.
``` javascript
aws.config.loadFromPath('./AwsConfig.json');
```

You need aws-sdk & NodeJS installed globally:

```sh
$ npm install
```

```sh
$ git clone [git-repo-url] thinkexpedite.com
$ cd thinkexpedite.com
$ npm i -d
$ cd deploy
node .\deploy.js [options: all | index | js | css | images | createBucket]
```
NB S3 Bucket is hard-coded to ThinkExpedite.com

License
----

MIT



   [Thinkexpedite]: <https://github.com/thinexpedite>
   [node.js]: <http://nodejs.org>
  
