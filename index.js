const AWS = require("aws-sdk");
const debug = require("debug")("awsS3");

class SESHelper {
  constructor(config) {
    this.ENV = config.ENV;
    this.BUCKET = config.SES_BUCKET;
    AWS.config.update({
      accessKeyId: config.SES_KEY,
      secretAccessKey: config.SES_SECRET,
      region: config.SES_REGION
    });

    this.ses = new AWS.SES({});
  }
  async senEmail({ from='', cc=[], to=[], subject='', html='', text='' } = {}) {
    if (!from) throw Error('parameter key "from" is required');
    if (to.length === 0) throw Error('parameter key "to" is required');
    if (!subject) throw Error('parameter key "subject" is required');
    if (!html && !text) throw Error('need html or text');
    var params = {
      Destination: {
        /* required */
        CcAddresses: cc,
        ToAddresses: to
      },
      Message: {
        Body: {
          ...html ? {
            Html: {
              Charset: "UTF-8",
              Data: html,
            },
          } : {},
          ...text ? {
            Text: {
              Charset: "UTF-8",
              Data: text,
            },
          } : {},
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject
        }
      },
      Source: from,
      ReplyToAddresses: [],
    };
    var result = await this.ses.sendEmail(params).promise();
    return result;
  }
}

module.exports = SESHelper;
