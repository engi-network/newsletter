const a = `
<html>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <meta name='viewport' content='width=device-width'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  </head>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            grifter: ['grifter', 'sans-serif'],
            helvetica: ['Helvetica Neue', 'sans-serif'],
            arial: ['Arial', 'sans-serif']
          },
          colors: {
            primary: {
              purple: '#BA54EC',
            },
            text: {
              primary: '#232323',
            }
          }
        }
      }
    }
  </script>
  <style type='text/css'>
    html, 
    body {
      height: 100%;
      margin: 0px;
    }

    * {
      box-sizing: border-box;
    }

    a[x-apple-data-detectors=true] {
      color: inherit !important;
      text-decoration: none !important;
    }

    a {
      text-decoration: none;
    }

    @font-face {
      font-family: 'grifter';
      src: url('https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/grifterbold.otf') format('truetype');
    }

    #root {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      height: fit-content;
      width: 100%;
      background-color: #F3F5F9;
      padding: 32px;
    }

    .content {
      max-width: 543px;
      background-color: #b5b5b5;
      padding: 40px 16px 36px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .logo {
      margin: auto;
      height: auto;
      width: auto;
    }

    .heading {
      font-weight: 700;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 0.01em;
      font-family: 'grifter';
    }

    .paragraph {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: rgba(35, 35, 35, 0.6);
    }

    .home-image {
      margin: auto;
      width: 100%;
    }

    .button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      background: rgba(0, 0, 0, 0.21);
      border: 1px solid #FFFFFF;
      width: 100%;
      color: white;
      font-weight: 700;
      font-size: 16px;
    }

    .support_link {
      background-color: rgb(169, 92, 225);
      text-decoration: underline;
      color: rgba(35, 35, 35, 0.6);
    }

    .text-center {
      text-align: center;
    }

    .text-left {
      text-align: left;
    }

    .text-sm {
      font-size: 14px;
    }

    #footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 48px;
    }

    .footer_info {
      color: #8A8A8A;
      margin-bottom: 24px;
    }

    .terms_links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 4px;
    }

    .terms_links > a {
      color: black;
    }

    .social_links {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .social_links > a {
      margin-right: 4px;
    }

    .social_links > a:last-of-type {
      margin-right: 0px;
    }


    @media (max-width: 660px) {
      .content {
        padding: 52px 12px 32px 12px;
      }

      .stay_tuned {
        text-align: center;
      }
    }

  </style>
  <body>
    <div id='root'>
      <div class='content'>
        <img class='logo' src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/logo.svg' alt='logo' width="" height=""/>
        <h1 class='heading'>
          Greetings!
        </h1>
        <p class='paragraph'>
          Welcome {{firstname}},<br/><br/>

          We are incredibly excited to have you. Join us on our journey to make professional programming flexible, fast, and fun for businesses and coders alike!
        </p>
        <img class="home-image" src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/main.svg' alt='main_image' />
        <!-- <h2 class='text-xl leading-5 text-bold text-text-primary' >Weekly Product Update</h2>
        <p class='text-sm mt-2 text-text-primary/60 mt-2'>
          Engi empowers programmers to flexibly earn money writing code. Work whenever, wherever, and however on the jobs that you want. Lorem ipsum dolor sit amet, consectetur et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p> -->
        <a href='https://engi.network/' target='_blank' class='button mb-9'>See Our Website</a>
        <p class='paragraph stay_tuned text-left mb-6'>
          Stay tuned for product updates 🚀 If at any time you have questions or need assistance, please contact us at  <a href='mailto:support@engi.com' class='support_link'>support@engi.com</a>.
          <br/><br/>
          Cheers,<br/> Team Engi!
        </p>
        
      </div>
      <div id='footer'>
        <img src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/engi.svg' alt='engi' width='80px' />
        <div class='social_links'>
          <a href='https://facebook.com' target='_blank' class='mr-6'><img src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/facebook.svg' alt='facebook'/></a>
          <a href='https://www.linkedin.com/company/engi-network' target='_blank' class='mr-6'><img src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/linkedin.svg' alt='linkedin'/></a>
          <a href='https://twitter.com/engi_network' target='_blank' class='mr-6'><img src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/twitter.svg' alt='twitter'/></a>
          <a href='https://instagram.com/engi.network?igshid=YmMyMTA2M2Y=' target='_blank'><img src='https://engi-email-template.s3.us-west-2.amazonaws.com/welcome-template/instagram.svg' alt='instagram'/></a>
        </div>
        <p class='footer_info paragraph text-sm'>
          Accelerate your product teams and earn cash writing code today
        </p>
        <div class='terms_links text-text-primary text-sm'>
          <a href='https://engi.network/' target='_blank'>Privacy Policy</a>
          <a href='https://engi.network/' target='_blank'>Terms and Conditions</a>
          <a href='https://engi.network/' target='_blank'>Unsubscribe</a>
        </div>
      </div>
    </div>
  </body>
</html>
`

const templateData = {
  firstname: "John"
}

console.log('=====>', JSON.stringify(templateData))