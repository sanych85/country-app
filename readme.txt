This apllication is called "Country app". It was created by Aleks Shatokhin in September 2020

The project was created using next techologies and libraries

react;
react-router-dom;
react-redux;
redux-hooks(useDispatch, useReducer);
react-hooks(useState, useEffect, useCallback);
reselect;
redux-thunk;
axios;
redux-logger;

Application uses free api https://restcountries.eu/


Country app in consist from 2 parts:
1) Displaying all countries and when you ckick on one country then displaying all information about single country: area, population, flag,borders, currencies , etc
2) Country Game.
Then you click start begin the game. The goal of the game - is figure out the name of the country by flag. 
The rules of the game:
a) You have only one try to figure out the name of the country, typing name in input. If you type incorrect name and click button "ñheck" the quantity of your incorrect attempt increase by one.
If yoy type correct name quantity of your correct attempt increase by one. Also, regardless correct or incorrect was your answer, increase quantity of your total answers by one
b) rate is calcuclated automatically (correct attempts/total attempts)
c) Then you try to figure out 3 country game automatically finish and you will see your result (rate).  In  archive of the game add information of the last game. After this automatically calculated  max rate in archive considering all rates that keep in archive. If  result of the last game  if more than last max result it become max result and displaying in the screen

d) After each game result (rate, total, wrong and right answers) nulled and we can start another game. 

