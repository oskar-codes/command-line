var input = document.querySelector("#input");
var input_container = document.querySelector("#input-container");
var cursor = document.querySelector("#cursor");
var log = document.querySelector(".log");
var color = "#33ff11";
log.innerHTML =
  "<p>Welcome to Webline ! Start by executing the help command.</p><br>";

function submit() {
  var command = input.value;
  input.value = "";
  var commands = strToArr(command);
  var parameters = command.substr(command.indexOf(" ") + 1);
  if (commands[0] != "") {
  log.innerHTML += "<p style='color: "+ color +";'>>   " + command + "</p><br>"
  if (commands[0] == "help" || commands[0] == "h") {
    log.innerHTML +=
      `<p style="color: `+ color +`;">Command list:</p><br>
       <table style="color: ` + color + `;">
         <tr>
          <td><b>h</b>elp</td><td>Shows this help panel.</td>
         </tr>
         <tr>
          <td><b>i</b>nfo</td><td>Shows information about this console.</td>
         </tr>
         <tr>
          <td><b>cl</b>ear</td><td>Clears the console.</td>
         </tr>
         <tr>
          <td><b>c</b>odepen (pen id) (view: pen, details, full, debug)</td><td>Browses to codepen, at the specified pen id, with the specified view. If "new" is entered instead of the pen id, a new pen is created.</td>
         </tr>
         <tr>
          <td><b>c</b>odepen<b>u</b>ser [user]</td><td>Browses to the specified user's Codepen profile.</td>
         </tr>
         <tr>
          <td><b>c</b>odepen<b>s</b>earch [query]</td><td>Searches Codepen for your query.</td>
         </tr>
         <tr>
          <td>url [url]</td><td>Browses to the specified url.</td>
         </tr>
         <tr>
          <td>cache [url] (view: full, text, source)</td><td>Browses to the cache of the specified url, and on the specified view.</td>
         </tr>
         <tr>
          <td><b>e</b>mbed [url]</td><td>Browses to the embed.ly page of the specified url.</td>
         </tr>
         <tr>
          <td><b>cli</b>ent (type: device, location)</td><td>Displays a specific type of information about the client. By default, the information type is device.</td>
         </tr>
         <tr>
          <td><b>b</b>ase<b>64</b></td><td>Encodes a file using base64 encoding, and opens it.</td>
         </tr>
         <tr>
          <td><b>g</b>oogle (query)</td><td>Searches Google for your query.</td>
         </tr>
         <tr>
          <td><b>y</b>outube (query)</td><td>Searches YouTube for your query.</td>
         </tr>
         <tr>
          <td><b>g</b>it<b>h</b>ub (query)</td><td>Searches Github for your query.</td>
         </tr>
         <tr>
          <td><b>p</b>rint [text]</td><td>Prints text to the console.</td>
         </tr>
         <tr>
          <td><b>conf</b>ig [setting: color, bgcolor] (value)</td><td>Modifies a certain setting of the terminal. If no value is specified, the setting is reset to it's default value.</td>
         </tr>
         <tr>
          <td><b>j</b>ava<b>s</b>cript (<b>nor</b>eturn) [code]</td><td>Executes some JavaScript code. By default, the return value of the code is printed to the console, but that can be prevented by adding noreturn as the first parameter of the command.</td>
         </tr>
       </table>
      `
  } else if (commands[0] == "info" || commands[0] == "i") {
    log.innerHTML += "<p style='color: " + color + "'>This terminal was made by ZOSK, a young amateur web and game developer. It was originally made in Codepen, and then moved to Github. That's why a lot of commands have to do with Codepen.<br>Check out my Twitter account <a style='color: " + color + ";' href='https://twitter.com/ZOSK17'>here</a>.</p><br>";
  } else if (commands[0] == "codepen" || commands[0] == "c") {
    if (commands[1]) {
      if (commands[1] == "new") {
        window.open("https://codepen.io/pen");
      } else {
        if (commands[2]) {
          window.open("https://codepen.io/ZOSK/" + encodeURIComponent(commands[2]) + "/" + encodeURIComponent(commands[1]));
        } else {
          window.open("https://codepen.io/ZOSK/pen/" + encodeURIComponent(commands[1]));
        }
      }
    } else {
      window.open("https://codepen.io");
    }
  } else if (commands[0] == "codepenuser" || commands[0] == "cu") {
    if (commands[1]) {
      window.open("https://codepen.io/" + parameters + "/");
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no user specified.</p><br>";
    }
  } else if (commands[0] == "codepensearch" || commands[0] == "cs") {
    if (commands[1]) {
      window.open(
        "https://codepen.io/search/pens?q=" +
        encodeURIComponent(parameters) +
        "&page=1&order=popularity&depth=everything"
      );
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no query specified.</p><br>";
    }
  } else if (commands[0] == "url") {
    if (commands[1]) {
      window.open(encodeURI(formatUrl(commands[1])));
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no url specified.</p><br>";
    }
  } else if (commands[0] == "cache") {
    if (commands[1]) {
      if (commands[2] == "full") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      } else if (commands[2] == "text") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=1&vwsrc=0");
      } else if (commands[2] == "source") {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=1");
      } else {
        window.open("http://webcache.googleusercontent.com/search?q=cache:" + encodeURI(formatUrl(commands[1])) + "&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      }
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no url specified.</p><br>";
    }
  /*} else if (commands[0] == "urlinfo" || commands[0] == "urli") {
    if (commands[1]) {
      log.innerHTML += '<p style="color: ' + color + '">Information about ' + encodeURI(formatUrl(commands[1])) + '<br>' + getUrlInfo(commands[1]) + '</p><br>'
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no url specified.</p><br>";
    }*/
  } else if (commands[0] == "embed" || commands[0] == "e") {
    if (commands[1]) {
      window.open("https://embed.ly/code?url=" + encodeURI(formatUrl(commands[1])));
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: no url specified.</p><br>";      
    }
  } else if (commands[0] == "client" || commands[0] == "cli") {
    log.innerHTML += '<p style="color: '+ color +';">Requesting data...</p><br>'
    
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.ipdata.co/?api-key=a528333681434307d1c1c9aebe6a4091375f01435b268ad60a7f8671');

    request.setRequestHeader('Accept', 'application/json');
    
    request.onerror = function () {
      log.innerHTML += '<p style="color: red;">Error : unable to request the data. Please check your internet connection.</p><br>'
      window.scrollBy(0, 100000);
    };

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        var data = JSON.parse(this.responseText)
        if (commands[1] == "device" || commands[1] == "dev" || !commands[1]) {
          log.innerHTML += `<p style="color: `+ color +`;">Request successful. Retreived device data:</p><br>
         <table style="color: `+ color +`;">
          <tr>
           <td>IP adress:</td><td>` + data.ip + `</td>
          </tr>
          <tr>
           <td>User agent:</td><td>` + navigator.userAgent + `</td>
          </tr>
          <tr>
           <td>App name:</td><td>` + navigator.appName + `</td>
          </tr>
          <tr>
           <td>Platform:</td><td>` + navigator.platform + `</td>
          </tr>
          <tr>
           <td>Device language:</td><td>` + navigator.language + `</td>
          </tr>
          <tr>
           <td>Is online:</td><td>` + navigator.onLine + `</td>
          </tr>
          <tr>
           <td>Java is enabled:</td><td>` + navigator.javaEnabled() + `</td>
          </tr>
          <tr>
           <td>Cookies are enabled:</td><td>` + navigator.cookieEnabled + `</td>
          </tr>
         </table>`;
        } else if (commands[1] == "location" || commands[1] == "loc") {
          log.innerHTML += `<p style="color: `+ color +`;">Request successful. Retreived localisation data:</p><br>
         <table style="color: `+ color +`;">
          <tr>
           <td>Continent:</td><td>` + data.continent_name + ` / ` + data.continent_code + `</td>
          </tr>
          <tr>
           <td>Country:</td><td>` + data.country_name + ` / ` + data.country_code + `</td>
          </tr>
          <tr>
           <td>Region:</td><td>` + data.region + ` / ` + data.region_code + `</td>
          </tr>
          <tr>
           <td>City:</td><td>` + data.city + `</td>
          </tr>
          <tr>
           <td>Primary language:</td><td>` + data.languages[0].name + ` / ` + data.languages[0].native + `</td>
          </tr>
          <tr>
           <td>Currency:</td><td>` + data.currency.name + ` / ` + data.currency.code + `</td>
          </tr>
          </table>`
        } else {
          log.innerHTML +=
          '<p style="color: red">Error: unknown information type ('+ commands[1] +'). Please use a valid information type or none.</p><br>';
        }
        window.scrollBy(0, 100000);
      }
    };
    request.send();
  } else if (commands[0] == "base64" || commands[0] == "b64") {
    $("#file").trigger('click');
  } else if (commands[0] == "google" || commands[0] == "g") {
    if (commands[1]) {
      window.open("https://google.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://google.com")
    }
  } else if (commands[0] == "youtube" || commands[0] == "yt" || commands[0] == "y") {
    if (commands[1]) {
      window.open("https://youtube.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://youtube.com")
    }
  } else if (commands[0] == "github" || commands[0] == "gh") {
    if (commands[1]) {
      window.open("https://github.com/search?q=" + encodeURIComponent(parameters));
    } else {
      window.open("https://github.com")
    }
  } else if (commands[0] == "clear" || commands[0] == "cl" || commands[0] == "cls") {
    log.innerHTML = "";
  } else if (commands[0] == "print" || commands[0] == "p") {
    if (commands[1]) {
      log.innerHTML +=
        '<p style="color: ' + color + '">' + parameters + "</p><br>";
    } else {
      log.innerHTML +=
        '<p style="color: red">Error: no text to print.</p><br>';
    }
  } else if (commands[0] == "config" || commands[0] == "conf") {
    if (commands[1]) {
      if (commands[2]) {
        var parameters2 = command.substr(command.indexOf(commands[1]) + commands[1].length);
        alert(parameters2 + ": " + isColor(parameters2))
      }
      if (commands[1] == "color" || commands[1] == "col") {
        if (commands[2]) {
          if (isColor(parameters2)) {
            color = parameters2;
            input.style.color = parameters2;
            input.style.caretColor = parameters2;
            cursor.style.color = parameters2;
            log.innerHTML += '<p style="color: '+ color +';">Text color set to '+ parameters2 +'.</p><br>';
          } else {
            log.innerHTML += '<p style="color: red;">Error: '+ parameters2 +' is not a valid color.</p><br>';
          }
        } else {
          color = "#33ff11";
          input.style.color = "#33ff11";
          input.style.caretColor = "#33ff11";
          cursor.style.color = "#33ff11";
          log.innerHTML += '<p style="color: '+ color +';">Text color reset.</p><br>';
        }
      } else if (commands[1] == "bgcolor" || commands[1] == "bgcol" || commands[1] == "bg") {
        if (commands[2]) {
          if (isColor(parameters2)) {
            document.body.style.backgroundColor = parameters2;
            log.style.backgroundColor = parameters2;
            input.style.backgroundColor = parameters2;
            input_container.style.backgroundColor = parameters2;
            cursor.style.backgroundColor = parameters2;
            log.innerHTML += '<p style="color: '+ color +';">Background color set to '+ parameters2 +'.</p><br>';
          } else {
            log.innerHTML += '<p style="color: red;">Error: '+ parameters2 +' is not a valid color.</p><br>';
          }
        } else {
          document.body.style.backgroundColor = "#000";
          log.style.backgroundColor = "#000";
          input.style.backgroundColor = "#000";
          input_container.style.backgroundColor = "#000";
          cursor.style.backgroundColor = "#000";
          log.innerHTML += '<p style="color: '+ color +';">Background color reset.</p><br>';
        }
      }
    } else {
      log.innerHTML +=
        '<p style="color: red;">Error: no setting specified.</p><br>';
    }
  } else if (commands[0] == "js" || commands[0] == "javascript") {
    var syntaxError = false;
    if (commands[1]) {
      if (commands[1] == "noreturn" || commands[1] == "nr" || commands[1] == "nor") {
        if (commands[2]) {
          var parameters2 = command.substr(command.indexOf(commands[1]) + commands[1].length);
          try {
            eval(parameters2);
          } catch (e) {
            if (e instanceof SyntaxError) {
              syntaxError = true;
              log.innerHTML += '<p style="color: red;">Syntax error: ' + e.message + '</p><br>'
            }
          }
          if (syntaxError == false) {
            log.innerHTML +=
            '<p style="color: ' +
            color +
            '">JavaScript code successfully executed.</p><br>';
          }
        } else {
          log.innerHTML +=
          '<p style="color: red">Error: no JavaScript code to execute.</p><br>';
        }
      } else {
        try {
          var result = eval(parameters);
        } catch (e) {
          if (e instanceof SyntaxError) {
            syntaxError = true;
            log.innerHTML += '<p style="color: red;">Syntax error: ' + e.message + '</p><br>'
          }
        }
        if (syntaxError == false) {
          if (result) {
              log.innerHTML +=
              '<p style="color: ' + color + '">Return value: ' + result + '</p><br>';
          } else {
            log.innerHTML +=
              '<p style="color: ' + color + '">No return value.</p><br>';
          }
          log.innerHTML +=
          '<p style="color: ' +
          color +
          '">JavaScript code successfully executed.</p><br>';
        }
      }
    } else {
      log.innerHTML +=
      '<p style="color: red">Error: no JavaScript code to execute.</p><br>';
    }
  } else {
    log.innerHTML +=
      '<p style="color: red">Error: unknown command ('+ command +'). Type help for command reference.</p><br>';
  }
  }
  window.scrollBy(0, 100000);
}

$("#input").keydown(function (e) {
  if (e.keyCode == 13) {
    submit();
  }
});

function toDataURL(src, callback) {
  var request = new XMLHttpRequest();
  request.onload = function() {
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      callback(fileReader.result);
    };
    fileReader.readAsDataURL(request.response);
  };

  request.responseType = "blob";
  request.open("GET", src, true);
  request.send();
}

function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  var test1 = s.color == strColor;
  var test2 = /^#[0-9A-F]{6}$/i.test(strColor);
  if(test1 == true || test2 == true){
    return true;
  } else{
    return false;
  }
}

function formatUrl(url){
  var httpString = 'http://';
  var httpsString = 'https://';

  if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString) {
    url = httpsString + url;
  }
  return url;
}

function getUrlInfo(input_url) {
  $.get( "https://embedapi.com/api/embed", { "url" : input_url, "key" : "mRWoAB6R2TUGp3zp4nSLOi63FDCkd7OJduTe9aPR" }, function( data ) { var rdata = data } );
  return rdata;
}

$("#file").change( function(event) {
  var path = URL.createObjectURL(event.target.files[0]);
  toDataURL(path, function(dataURL) {
    log.innerHTML += "<p style='color: "+ color +";'>File successfully converted.</p><br>"
    window.open(dataURL);
  });
})

window.onload = function () {
  input.focus();
};

function nWordsInStr(str) {
  return $.trim(str).split(" ").length;
}

function strToArr(str) {
  return str.trim().split(" ");
}
