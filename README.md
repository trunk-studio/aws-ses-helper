# trunk-aws-ses-helper

sample

```
let sesHelper = new SESHelper({
  SES_KEY,
  SES_SECRET,
  SES_REGION,
  ENV,
});

// 基本使用
await sesHelper.senEmail({
  from: 'test@example.com',  // required
  to: ['user@example.com'],  // required
  subject: '測試純文字',      // required
  text: '內容'
});
```

text 跟 html 參數擇一使用
兩者皆設定時，html 優先大於 text



```
npm install trunk-studio/trunk-aws-ses-helper
```

## License

MIT
