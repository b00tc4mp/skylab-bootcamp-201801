function Box(secret, password) {
    this.getSecret = function (_password) {
        if (password === _password) return secret;
    }

    this.setSecret = function (_secret, _password) {
        if (password === _password)
            secret = _secret;
    }

    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword)
            password = newPassword;
    }
}