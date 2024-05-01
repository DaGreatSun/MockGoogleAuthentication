const ReactDOMServer = require("react-dom/server");
const nodemailer = require("nodemailer");
const email = process.env.EMAIL;
const email_pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: email_pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const mailOptions = {
  from: email,
};

// export const emailTemplate = ({ title, body }) => (
//   `<div className="min-w-[1000px] max-w-[2000px] border">
//     <h1>
//       Title : <span>${ReactDOMServer.renderToString(title)}</span>
//     </h1>
//     <div className="flex">${ReactDOMServer.renderToString(body)}</div>
//   </div>`
// );
export const emailTemplate = ({ title, body }) =>
  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    dir="ltr"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>New email template 2024-01-06</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
        rel="stylesheet"
      />
      <style type="text/css">
        .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
        }
        .rollover:hover .rollover-second {
          max-height: none !important;
          display: block !important;
        }
        #outlook a {
          padding: 0;
        }
        .es-button {
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
        }
        .es-button-border:hover {
          border-style: solid solid solid solid !important;
          background: #0b317e !important;
          border-color: #42d159 #42d159 #42d159 #42d159 !important;
        }
        .es-button-border:hover a.es-button,
        .es-button-border:hover button.es-button {
          background: #0b317e !important;
        }
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 30px !important;
            text-align: center;
          }
          h2 {
            font-size: 26px !important;
            text-align: center;
          }
          h3 {
            font-size: 20px !important;
            text-align: center;
          }
          .st-br {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          h1 a {
            text-align: center;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
          }
          h2 a {
            text-align: center;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 26px !important;
          }
          h3 a {
            text-align: center;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-menu td a {
            font-size: 14px !important;
          }
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 16px !important;
          }
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 16px !important;
          }
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 14px !important;
          }
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 12px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-button-border {
            display: block !important;
          }
          a.es-button,
          button.es-button {
            font-size: 16px !important;
            display: block !important;
            border-left-width: 0px !important;
            border-right-width: 0px !important;
          }
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-m-p0 {
            padding: 0 !important;
          }
          .es-m-p0r {
            padding-right: 0 !important;
          }
          .es-m-p0l {
            padding-left: 0 !important;
          }
          .es-m-p0t {
            padding-top: 0 !important;
          }
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          table.es-social {
            display: inline-block !important;
          }
          table.es-social td {
            display: inline-block !important;
          }
          .es-m-p5 {
            padding: 5px !important;
          }
          .es-m-p5t {
            padding-top: 5px !important;
          }
          .es-m-p5b {
            padding-bottom: 5px !important;
          }
          .es-m-p5r {
            padding-right: 5px !important;
          }
          .es-m-p5l {
            padding-left: 5px !important;
          }
          .es-m-p10 {
            padding: 10px !important;
          }
          .es-m-p10t {
            padding-top: 10px !important;
          }
          .es-m-p10b {
            padding-bottom: 10px !important;
          }
          .es-m-p10r {
            padding-right: 10px !important;
          }
          .es-m-p10l {
            padding-left: 10px !important;
          }
          .es-m-p15 {
            padding: 15px !important;
          }
          .es-m-p15t {
            padding-top: 15px !important;
          }
          .es-m-p15b {
            padding-bottom: 15px !important;
          }
          .es-m-p15r {
            padding-right: 15px !important;
          }
          .es-m-p15l {
            padding-left: 15px !important;
          }
          .es-m-p20 {
            padding: 20px !important;
          }
          .es-m-p20t {
            padding-top: 20px !important;
          }
          .es-m-p20r {
            padding-right: 20px !important;
          }
          .es-m-p20l {
            padding-left: 20px !important;
          }
          .es-m-p25 {
            padding: 25px !important;
          }
          .es-m-p25t {
            padding-top: 25px !important;
          }
          .es-m-p25b {
            padding-bottom: 25px !important;
          }
          .es-m-p25r {
            padding-right: 25px !important;
          }
          .es-m-p25l {
            padding-left: 25px !important;
          }
          .es-m-p30 {
            padding: 30px !important;
          }
          .es-m-p30t {
            padding-top: 30px !important;
          }
          .es-m-p30b {
            padding-bottom: 30px !important;
          }
          .es-m-p30r {
            padding-right: 30px !important;
          }
          .es-m-p30l {
            padding-left: 30px !important;
          }
          .es-m-p35 {
            padding: 35px !important;
          }
          .es-m-p35t {
            padding-top: 35px !important;
          }
          .es-m-p35b {
            padding-bottom: 35px !important;
          }
          .es-m-p35r {
            padding-right: 35px !important;
          }
          .es-m-p35l {
            padding-left: 35px !important;
          }
          .es-m-p40 {
            padding: 40px !important;
          }
          .es-m-p40t {
            padding-top: 40px !important;
          }
          .es-m-p40b {
            padding-bottom: 40px !important;
          }
          .es-m-p40r {
            padding-right: 40px !important;
          }
          .es-m-p40l {
            padding-left: 40px !important;
          }
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
        }
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body
      data-new-gr-c-s-loaded="14.1148.0"
      style="
        width: 100%;
        font-family:
          roboto,
          helvetica neue,
          helvetica,
          arial,
          sans-serif;
        padding: 0;
        margin: 0;
      "
    >
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #f8f9fd; width: 800px; margin: auto"
      >
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #f8f9fd;
          "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-header"
                align="center"
                role="none"
                style="
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td align="center" style="padding: 0; margin: 0">
                    <table
                      bgcolor="#ffffff"
                      class="es-header-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 10px;
                            padding-bottom: 15px;
                            padding-left: 30px;
                            padding-right: 30px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="border-collapse: collapse; border-spacing: 0px"
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 540px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        src="https://hospital.cheesysun.com/logo.png"
                                        alt
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        height="111"
                                        class="adapt-img"
                                        width="333"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#071f4f"
                    style="
                      padding: 0;
                      margin: 0;
                      background-color: #071f4f;
                      background-image: url(https://ecmweki.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png);
                      background-repeat: no-repeat;
                      background-position: center top;
                    "
                    background="https://ecmweki.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-left: 30px;
                            padding-right: 30px;
                            padding-top: 40px;
                            padding-bottom: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="border-collapse: collapse; border-spacing: 0px"
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 540px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      height="0"
                                      style="padding: 0; margin: 0"
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          line-height: 36px;
                                          font-size: 30px;
                                          font-style: normal;
                                          font-weight: bold;
                                          color: #ffffff;
                                          text-align: center;
                                        "
                                      >
                                        Welcome to OneForAll!&nbsp;
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        Here's your registration confirmation<br />
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 33px;
                                          color: #ffffff;
                                          font-size: 22px;
                                        "
                                      >
                                        Temporary password:
                                        <strong>${ReactDOMServer.renderToString(
                                          body,
                                        )}</strong>
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        For security reasons, we recommend
                                        changing your password immediately after
                                        logging in. Here's how you can do it:
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        1. Log in to your account using the
                                        temporary password.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
  
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        2. Navigate to your account settings or
                                        profile page.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        3. Find the option to change your password
                                        and follow the prompts to set a new,
                                        secure password.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #ffffff;
                                          font-size: 16px;
                                        "
                                      >
                                        <br />
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 27px;
                                          color: #ffffff;
                                          font-size: 18px;
                                        "
                                      >
                                        <strong>If this wasn't you</strong>
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 23px;
                                          color: #ffffff;
                                          font-size: 15px;
                                        "
                                      >
                                        If you did not register for an account
                                        with OneForAll website, please disregard
                                        this email.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="padding: 0; margin: 0; background-color: #f8f9fd"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-bottom: 15px;
                            padding-left: 20px;
                            padding-right: 20px;
                            padding-top: 40px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="border-collapse: collapse; border-spacing: 0px"
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 281px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      class="es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 15px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #131313;
                                          font-size: 16px;
                                        "
                                      >
                                        This notification has been sent to the
                                        email address associated with your
                                        account.<br /><br />This email message was
                                        auto-generated. Please do not respond. If
                                        you need additional help, please contact
                                        support team.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #131313;
                                          font-size: 16px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          line-height: 24px;
                                          color: #131313;
                                          font-size: 16px;
                                        "
                                      >
                                        Support Team: 012-2896 194<br />
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        src="https://hospital.cheesysun.com/logo.png"
                                        alt
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        class="adapt-img"
                                        height="49"
                                        width="147"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
