export default {
    getCookie(name: string): string
    {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : "";
    },

    setCookie(name: string, value: string, path = "/", expires = ""): void
    {
        path = path ?? "/";

        if (expires == "") {
            const now = new Date();
            expires = (new Date(now.getTime() + (1000 * 60 * 60 * 24 * 30))).toUTCString();
        }

        document.cookie = name + "=" + value + "; Path=" + path + "; Expires=" + expires + "; SameSite=None; Secure";
    },

    setCookieFromJWT(name: string, token: string, path = "/"): void {
        const claim = JSON.parse(atob(token.split(".")[1]));

        const expires = new Date();
        expires.setTime(claim.exp * 1000);

        this.setCookie(name, token, path, expires);
    },

    deleteCookie(name: string, path = "/"): void
    {
        const expires = new Date(0);
        document.cookie = name + "=; Path=" + path + "; Expires=" + expires + "; SameSite=None; Secure";
    }
}
