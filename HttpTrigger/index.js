module.exports = async function (context, req) {
  const PushNotifications = require('@pusher/push-notifications-server');
  let beamsClient = new PushNotifications({
    instanceId: 'YOUR_INSTANCE_ID',
    secretKey: 'YOUR_SECRET_KEY'
  });
  beamsClient.publishToInterests(['hello'], {
    apns: {
      aps: {
        "alert" : {
          "title" : req.body.title,
          "body" : req.body.message
        },
      }
    }
  }).then((publishResponse) => {
     context(done);
  }).catch((error) => {
    console.log(error);
    context(done);
  });
};
