1. This is Assignnment for onepercent submitted by Atharva Gulhane(Me).
  
  Folder is oncepercent, in that also there is 1 more onepercent, go in that and in terminal : run npx react-native run-android to run the project.


2. Entry point of App is index.js file which has the pushNotifatication configuration and the app registry.
3. Next one is App.tsx where there is the support of redux is there and the rootNavigation file.
4. In RootNavigation file, In Navigation Container, all the screens are registered, in which initial screen is Splash screen.
5. Splash Screen will be displayed for two seconds and then automatic Navigation to Login page will be there using setTimeout.
6. In LoginScreen, you can enter dummy email and password to login, without that you can not login,after that you will be navigated to StockList Screen. 
7. In StockList Screen, I made the API call through redux pipeline(action,reducer, epic, service). In Service, Ideally fetch call to API should have happened and returned us a response, but the API has been exhausted so, I placed a dummy response. (Just uncomment the API call line and comment the dummy response line, to see the actual API response, but it will give the error as the APIs are exhausted).
8. when you long press on the stock card, the description for that stock will come up(this is dummy description), and long press only to hide the description.
9. Press card to navigate to stock detail screen.
10. StockAliasId is passed from stockList to stock detail screen, and in stock detail screen we are making a API call to stockdetail screen, again in service layer we have mocked the data.(Just uncomment the API call line and comment the dummy response line, to see the actual API response, but it will give the error as the APIs are exhausted).
11. Add to order the button will store the data in store, and will navigate to cartList page, where you can delete the stocks (before confirming the order). Same stock is added because the in stock detail we are getting the same stock detail.
12. once the order is placed, you will get the Notification.

