<a href="https://ject.netlify.com/">
    <img src="https://user-images.githubusercontent.com/23233648/50394500-44635380-07a1-11e9-93f2-596e8b8b839f.png" alt="Logo" title="JECT" align="right" height="40" />
</a>

# **JECT**

This was created during our time as students at Code Chrysalis!<br>
JECT is a web application for public speaking training. This repository is for the backend.

[![JECT UI](https://user-images.githubusercontent.com/23233648/50395178-bccc1380-07a5-11e9-8b00-ead2f3fe7da6.png)](https://ject.netlify.com/)

## Table of content

- [Demo Page](#Demo-Page)
- [Setup](#Setup)
- [API](#API)
- [How it works](#How-it-works)
- [Links](#links)
- [Team JECT](#Team-JECT)

## Demo Page

[Demo Page](https://ject.netlify.com/) is here! You can practice public speaking!

## Setup

If you want to try JECT on your local machine, follow the instructions below.

### Installation

1. Clone this repo

```
git clone https://github.com/cc6-ject/ject-backend.git
```

2. Install all dependencies<br>
   If you like npm more, just use npm.

```
cd ject-frontend
yarn
```

3. Install serverless globally

```
yarn global add serverless
```

### AWS settings

Because this backend uses AWS, you need to have an AWS account.

1. Create an account [AWS Console](https://aws.amazon.com/jp/)<br>
   If you don't have one.

2. Create IAM user and save Access Key ID and Secret access Key<br>
   Because it's complicated, please follow [this page](https://serverless-stack.com/chapters/create-an-iam-user.html).

3. Install AWS cli.<br>
   For AWS Access Key and AWS Secret Access Key, please use what you got in 2.

```
brew install awscli
aws configure
```

### Deployment

Please deploy AWS components (Cognito, Lambda, DynamoDB, API Gateway). All deployment code is already written (Infrustructrue as a Code).

1. Deploy everything.<br>
   If you add -s prod, you can deploy production mode as well.

```
serverless deploy
```

2. Check on AWS<br>
   Check (Cognito, Lambda, DynamoDB, API Gateway) on AWS console, you can see these resources are already deployed.

3. Test<br>
   Please change <function names> and <mocks path>. You can test all API. All function names are written in serverless.yml and all mock data is in mocks folder. If your configuration is correct, you can get status code 200.

```
serverless invoke local --function <function name> --path <mocks paths>
```

Example

```
serverless invoke local --function listKaraoke --path mocks/karaoke/list.json
```

<br>
     <br>
     <img src="https://user-images.githubusercontent.com/23233648/50434174-d1341b80-091f-11e9-91af-0185341ab8f5.png" height="80%" width="80%">
     <br>
     <br>

4. Check on AWS<br>
   Check DynamoDB on AWS. You can see dummy data.

### Clean up

If you want to delete all resources on AWS, do this.

```
serverless remove
```

## API

JECT provides three kinds of API,

1. API for Projection mode.
   - GET
     <br>Get one data: /api/decibel/:id
     <br>List: /api/decibel
   - POST
     <br>Add data: /api/decibel
   - DELETE
     <br>Delete data: /api/decibel
2. API for Tongue Twister mode.
   - GET
     <br>Get one data: /api/tongueTwister/:id
     <br>List: /api/tongueTwister
   - POST
     <br>Add data: /api/tongueTwister
   - DELETE
     <br>Delete data: /api/tongueTwister
3. API for Karaoke mode.
   - GET
     <br>Get one data: /api/Karaoke/:id
     <br>List: /api/Karaoke
   - POST
     <br>Add data: /api/Karaoke
   - DELETE
     <br>Delete data: /api/Karaoke

## How it works

- API Server<br>
  AWS Lambda
- API Management<br>
  API Gateway
- No SQL database<br>
  DynamoDB
- User authentication<br>
  Cognito

## Links

- [Web Site](https://ject.netlify.com/)
- [AWS](https://aws.amazon.com/jp/)
- [AWS Documentation](https://docs.aws.amazon.com/index.html)
- [Serverless](https://serverless-stack.com/)

## Team JECT

### Follow us on Github:

- [daenamkim](https://github.com/daenamkim)
- [egurinko](https://github.com/egurinko)
- [mp40](https://github.com/mp40)
