const SESHelper = require('./../index')
const config = require('config');
const request = require('superagent');

let {
  SES_KEY,
  SES_SECRET,
  SES_REGION,
} = config.aws

let {ENV} = config;

let constructorParams = {
  SES_KEY,
  SES_SECRET,
  SES_REGION,
  ENV,
}

let sesHelper = new SESHelper(constructorParams);

test('send text email', async () => {
  let result = await sesHelper.senEmail({
    from: 'office@trunk-studio.com',
    to: ['dan@trunk-studio.com'],
    subject: '測試純文字',
    text: '內容'
  });
});

test('send html email', async () => {
  
  let result = await sesHelper.senEmail({
    from: 'office@trunk-studio.com',
    to: ['dan@trunk-studio.com'],
    subject: '測試 html',
    html: 
`
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
`,
  });
});