# [Generating a certificate for local https server][create-ssl-certificate]

For local development testing a self-signed certificate is adequate. You can generate one with the OpenSSL kit like so:

Generating the private key:

```sh
$ openssl genrsa -des3 -out server.key 1024
```

output:

```
Generating RSA private key, 1024 bit long modulus
.........................................................++++++
........++++++
e is 65537 (0x10001)
Enter PEM pass phrase:
Verifying password - Enter PEM pass phrase:
enter a passphrase for your private key.
```

Generating the CSR (certificate signing request):

```sh
$ openssl req -new -key server.key -out server.csr
```

it will request details like this:

```
Country Name (2 letter code) [GB]:
State or Province Name (full name) [Berkshire]:
Locality Name (eg, city) [Newbury]:
Organization Name (eg, company) [My Company Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (eg, your name or your server's hostname) []:
Email Address []:
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
it's fairly straightforward, the common name is your server's hostname as it says in brackets.
```

Generating the self signed certificate:

```sh
$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

# References

[Enabling HTTPS on express.js](https://stackoverflow.com/questions/11744975/enabling-https-on-express-js)

[How to easily create a SSL certificate...][create-ssl-certificate]

[create-ssl-certificate]:https://superuser.com/questions/73979/how-to-easily-create-a-ssl-certificate-and-configure-it-in-apache2-in-mac-os-x

