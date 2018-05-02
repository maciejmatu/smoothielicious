module.exports = ({ name }) => {
  return `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
      <title></title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }

        .ReadMsgBody {
          width: 100%;
        }

        .ExternalClass {
          width: 100%;
        }

        .ExternalClass * {
          line-height: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }

        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }

        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
      <!--<![endif]-->
      <!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-100 {
            width: 100%!important;
          }
        }
      </style>
    </head>

    <body style="background: #FFFFFF;">
      <div class="mj-container" style="background-color:#FFFFFF;">
        <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
        <div style="margin:0px auto;max-width:600px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0">
            <tbody>
              <tr>
                <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
                  <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
                  <div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td style="word-wrap:break-word;font-size:0px;padding:16px 20px 16px 20px;" align="left">
                            <div style="cursor:auto;color:#000000;font-family:Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;">
                              <p>
                                <span style="font-size:24px;">Hello, ${name}!</span>
                              </p>
                              <p>
                                <span style="font-size:16px;">I hope you like my imaginary smoothie shop website. You can go back to the
                                  <a href="https://medium.com/@maciejmatu">article</a> if you&apos;d like.&#xA0;Don&apos;t worry, you didn&apos;t actually order 500,000
                                  smoothies. If you would like to contact me, feel free to reach out on
                                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/maciej-matuszewski-5087a975/">linked.in</a>,
                                  <a target="_blank" rel="noopener" href="http://github.com/maciejmatu">github</a>&#xA0;or send me a message at <a href="mailto:maciek.matuszewski@gmail.com">maciek.matuszewski@gmail.com</a></span>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
      </div>
    </body>

    </html>
  `;
}