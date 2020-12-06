document.title = "Weather";
var titleDiv = document.createElement('div');
titleDiv.setAttribute('class', 'black stuff-box shadowed');
var mainHeading = document.createElement('h2');
mainHeading.textContent = "Vue.js Weather App";
mainHeading.setAttribute('align', 'center');
titleDiv.appendChild(mainHeading);
document.body.appendChild(titleDiv);
var locDiv = document.createElement('div');
locDiv.setAttribute('class', 'blue stuff-box shadowed');
var locheading = document.createElement('h1');
locheading.textContent = "Your Location";
locheading.setAttribute('align', 'center');
locDiv.appendChild(locheading);
let locP = document.createElement('p');
locP.textContent = "Loading... ";
locDiv.appendChild(locP);
const ipUrl = "http://api.ipstack.com/check";
const ipApiKey = "?access_key=e18aa433c3de05dabcbffd0f53b96a73";
locDiv.appendChild(locP);
const url = ipUrl + ipApiKey;
fetch(url)
						.then(response => response.json())
						.then(json => {
            let lat;
            let long;
						console.log(json);
            lat = json['latitude'];
            long = json['longitude'];
						locP.textContent = "You are located in " + json['city'] + ", " + json['region_name'] + ", " + json['country_name'] + " at coordinates (" + lat + ", " + long + ")";
						document.body.appendChild(locDiv);
						let cwUrl = "http://api.openweathermap.org/data/2.5/weather?";
						let wapi = "fa6a7f79b22f779d3b812a811abc1581";
						cwUrl = cwUrl + "lat=" + lat + "&lon=" + long + "&units=imperial" +"&appid=" + wapi;
						fetch(cwUrl)
            						.then(response => response.json())
            						.then(json => {
                          console.log(json);
													let cwDiv = document.createElement('div');
													cwDiv.setAttribute('class', 'yellow stuff-box shadowed');
													let cwheading = document.createElement('h1');
													cwheading.textContent = "Current Conditions";
													cwDiv.appendChild(cwheading);
													let cwDateTime = document.createElement('p');
													cwDateTime.textContent = "Current Weather Conditions @ " + Date(Date.now());
													cwDiv.appendChild(cwDateTime);
													let conList = document.createElement('ul');
													let cTemp = document.createElement('li');
													cTemp.textContent = "Currently " + json['main']['temp'] + "F";
													let hTemp = document.createElement('li');
													hTemp.textContent = "High " + json['main']['temp_max'] + "F";
													let lTemp = document.createElement('li');
													lTemp.textContent = "Low " + json['main']['temp_min'] + "F";
													let weather = document.createElement('li');
													weather.textContent = json['weather'][0]['description'];
													let humid = document.createElement('li');
													humid.textContent = json['main']['humidity'] + "% Humidity";
													let press = document.createElement('li');
													press.textContent = json['main']['pressure'] + " hPa pressure";
													conList.appendChild(cTemp);
													conList.appendChild(hTemp);
													conList.appendChild(lTemp);
													conList.appendChild(weather);
													conList.appendChild(humid);
													conList.appendChild(press);
													cwDiv.appendChild(conList);

													document.body.appendChild(cwDiv);
													let wUrl = "http://api.openweathermap.org/data/2.5/forecast?";

							            wUrl = wUrl + "lat=" + lat + "&lon=" + long +"&units=imperial" + "&appid=" + wapi;
							            fetch(wUrl)
							            						.then(response => response.json())
							            						.then(json => {
							                          console.log(json);
																				let forecast = document.createElement('div');
																				let foreHeading = document.createElement('h1');
																				foreHeading.textContent = "5-day 3-hour Forecast";
																				foreHeading.setAttribute('align', 'center');
																				forecast.appendChild(foreHeading);
																				let i;

																					let hourDiv = document.createElement('div');
																					hourDiv.setAttribute('class', 'black stuff-box shadowed');
																					let hourHeading = document.createElement('p');
																					hourHeading.textContent = "Conditions for " + json['list'][i]['dt_txt'];
																					hourDiv.appendChild(hourHeading);
																					let hconList = document.createElement('ul');
																					let hcTemp = document.createElement('li');
																					hcTemp.textContent = "Temperature " + json['list'][i]['main']['temp'] + "F";
																					let hweather = document.createElement('li');
																					hweather.textContent = json['list'][i]['weather'][0]['description'];
																					let hhumid = document.createElement('li');
																					hhumid.textContent = json['list'][i]['main']['humidity'] + "% Humidity";
																					let hpress = document.createElement('li');
																					hpress.textContent = json['list'][i]['main']['pressure'] + " hPa pressure";
																					hconList.appendChild(hcTemp);
																					hconList.appendChild(hweather);
																					hconList.appendChild(hhumid);
																					hconList.appendChild(hpress);
																					hourDiv.appendChild(hconList);

																					forecast.appendChild(hourDiv);
																				}
																				document.body.appendChild(forecast);
							                        });

                        });

});
