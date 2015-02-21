# send-mail
NodeJS module used to send emails through my personal website.

## Configuration

It's necessary to create a `config` folder in root application folder. After, create a JSON file on this folder and rename it to `local-config.json`.
This file holds the email account credentials and is a dependency for `mail-service`, which uses those credentials to send emails through this module. 

`local-config.json` must respect the example below:

```json
{
  "service": "Mail",
  "user": "foo",
  "pass": "secret"
}
```

Where configured attributes represents:

- `service` - Email service name. 
In this case, we're using [nodemailer](https://github.com/andris9/Nodemailer) to send emails through this module, which 
automatically configures SMTP server based on its supported service list. 
So we need to pick some of them to work. You can check the entire list [here](https://github.com/andris9/nodemailer-wellknown#supported-services)
- `user` - Username used to log in to your email account.
- `pass` - Password used to log in to your email account.

## To Do

- Email password set on `local-config.js` hasn't any security approach ATM, like a hash or cryptography method. 
It's important to implement any security way around email password configuration.
- SMTP service configuration is limited to `nodemailer-wellkown` services ATM. 
I need to implement a way allowing the use of private SMTP services.
