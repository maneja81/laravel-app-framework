<!doctype html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      </style>
    <![endif]-->
    <title>@yield('title', '')</title>
    <style>
        img {
            max-width: 100%;
            vertical-align: middle;
            line-height: 1
        }

        @media (max-width: 600px) {
            .sm-my-8 {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }

            .sm-px-4 {
                padding-left: 16px !important;
                padding-right: 16px !important
            }

            .sm-px-6 {
                padding-left: 24px !important;
                padding-right: 24px !important
            }

            .sm-leading-8 {
                line-height: 32px !important
            }
        }
    </style>
</head>

<body style="margin: 0; width: 100%; background-color: #f1f5f9; padding: 0; -webkit-font-smoothing: antialiased; word-break: break-word">
    <div role="article" aria-roledescription="email" aria-label="Confirm your email address" lang="en">
        <div class="sm-px-4" style="background-color: #f1f5f9; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif">
            <table align="center" cellpadding="0" cellspacing="0" role="none">
                <tr>
                    <td style="width: 552px; max-width: 100%">
                        <div class="sm-my-8" style="margin-bottom: 24px; margin-top: 48px; width: 100%; text-align: center">
                            <a href="{{ config('app.url') }}" style="font-size: 24px; font-weight: 700; color: #000; text-decoration-line: none" target="_blank">
                                {{ config('app.name') }}
                                {{-- <x-svg src="feather/activity" class="w-20" /> --}}
                            </a>
                        </div>
                        <table style="width: 100%;" cellpadding="0" cellspacing="0" role="none">
                            <tr>
                                <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding: 48px; font-size: 16px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); line-height:26px;">
                                    @yield('content')
                                    <div role="separator" style="line-height: 24px">&zwj;</div>
                                </td>
                            </tr>
                            <tr role="separator">
                                <td style="line-height: 24px;">&zwj;</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 24px; padding-right: 24px; text-align: center; font-size: 14px; color: #475569">
                                    <p style="margin: 0 0 16px">&copy; 2024 - {{ config('app.name') }}</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>
