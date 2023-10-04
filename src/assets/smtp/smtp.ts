/* eslint-disable */
/* SmtpJS.com - v3.0.0 */

declare var XDomainRequest: any;

var Email = {
    send: function (a: any) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            var t = JSON.stringify(a);

            // 创建请求对象
            var xhr: any;
            if ("withCredentials" in new XMLHttpRequest()) {
                xhr = new XMLHttpRequest();
            } else if (typeof XDomainRequest !== 'undefined') {
                xhr = new XDomainRequest();
            } else {
                e('CORS is not supported in this browser.');
                return;
            }

            // 发送请求
            xhr.open("POST", "https://smtpjs.com/v3/smtpjs.aspx?");
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                var response = xhr.responseText;
                n(response);
            };
            xhr.onerror = function () {
                e('Error occurred while sending email.');
            };
            xhr.send(t);
        });
    }
};


// declare var XDomainRequest :any;

// var Email = { send: function (a: any) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e: any) { n(e) }) }) }, ajaxPost: function (e: any, n: any, t: any) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e:any, n:any) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e:any, n:any) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

/* SmtpJS.com - v3.0.0 */
// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

export default Email