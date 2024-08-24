const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.uploadFile = (file, bucketName) => {
  const params = {
    Bucket: bucketName,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
  };

  return s3.upload(params).promise();
};
