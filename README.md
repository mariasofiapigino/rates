# MVP Rate change notification

## What's here

Web application with a basic login and a google sheet embed. There are two parts to this app:
- Google Sheets Apps Script
- Simple React App

It all starts with a simple React app that has an Auth0 login.  

<img width="1439" alt="Screen Shot 2022-07-24 at 21 14 32" src="https://user-images.githubusercontent.com/80781808/180671873-82be174a-6716-4a30-ba22-c935b5d5629d.png">

The decision to use this login manager was to facilitate access with the google account.  

<img width="1418" alt="Screen Shot 2022-07-24 at 21 15 18" src="https://user-images.githubusercontent.com/80781808/180671903-d744af41-d223-4283-90f9-e38107d92a9a.png">


After logging in, and if we have the necessary permissions in the spreadsheet, an embedded Google Sheets is displayed. We have the possibility to edit the values of the "Rate" column.

<img width="1439" alt="Screen Shot 2022-07-24 at 21 16 55" src="https://user-images.githubusercontent.com/80781808/180671992-1a11069e-2d75-49b3-bf42-c681e94b298b.png">

Any edition made in the "rates" column causes an email to be sent automatically informing of the change to the email in the column on the right.

<img width="1417" alt="Screen Shot 2022-07-24 at 21 19 05" src="https://user-images.githubusercontent.com/80781808/180672090-e1b9556a-67a9-4072-98e0-194fe371d83e.png">

![Screen Shot 2022-07-24 at 21 23 14](https://user-images.githubusercontent.com/80781808/180672283-dc79de2f-7522-4c3e-b2c7-78cc6d61514a.png)


## Contributing Google Sheets Apps Script

The code that is executed when the value of a rate is edited can be found in the Apps Script section of the same spreadsheet.

It is located as Extensions > App Script in the spreadsheet.

The code is under the name of [RateChange](https://script.google.com/home/projects/1NkRLeisAjKEFAM_DKa1CQgdlRCqODjFQKy8vl4hTPHrLnrkGx6N9DVR5/edit).

In the "triggers" section we can see the trigger that is executed when editing the spreadsheet.

## Contributing React App

1. **Fork this repo**   
2. **Git clone**
    ```bash
    $ git clone git@github.com:mariasofiapigino/rates.git
    ```
3. **NPM install**
    ```bash
    $ npm install
    ```
## Possible improvements
Considering that the application should iterate and improve, some possible improvements are:

- Think if the user registry is needed for more issues and if it makes sense to have their own management
- Unit tests in application in React
- Use of Docker
