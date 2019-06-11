var input = document.querySelector("#input");
var log = document.querySelector(".log");
var color = "#22ff11";
log.innerHTML =
  "<p>Welcome to this little command line ! Start by typing help.</p><br>";

function submit() {
  var command = input.value;
  input.value = "";
  var commands = strToArr(command);
  var parameters = command.substr(command.indexOf(" ") + 1);
  if (commands[0] != "") {
  if (commands[0] == "help" || commands[0] == "h") {
    log.innerHTML +=
      `<p style="color: `+ color +`;">Command list:</p><br>
       <table style="color: ` + color + `;">
         <tr>
          <td>help</td><td>shows this help panel</td>
         </tr>
         <tr>
          <td>info</td><td>shows information about this console</td>
         </tr>
         <tr>
          <td>clear</td><td>clears the console</td>
         </tr>
         <tr>
          <td>codepen [pen id] [view (pen,details,full,debug)]</td><td>browses to codepen, at the specified pen id, with the specified view</td>
         </tr>
         <tr>
          <td>codepenuser [user]</td><td>browses to the specified user's Codepen profile</td>
         </tr>
         <tr>
          <td>codepensearch [query]</td><td>searches Codepen for your query</td>
         </tr>
         <tr>
          <td>url [url]</td><td>browses to the specified url. This automatically appends https:// if not in url</td>
         </tr>
         <tr>
          <td>cache [url] [view (full,text,source)]</td><td>browses to the cache of the specified url, and on the specified view</td>
         </tr>
         <tr>
          <td>embed [url]</td><td>Browses to the embed.ly page of the specified url</td>
         </tr>
         <tr>
          <td>urlinfo [url]</td><td>gets info about the specified url. /!\\ Not stable /!\\</td>
         </tr>
         <tr>
          <td>google [query]</td><td>searches Google for your query</td>
         </tr>
         <tr>
          <td>youtube [query]</td><td>searches YouTube for your query</td>
         </tr>
         <tr>
          <td>github [query]</td><td>searches Github for your query</td>
         </tr>
         <tr>
          <td>print [text]</td><td>prints text to the console</td>
         </tr>
         <tr>
          <td>color [value]</td><td>sets the color of the console's text, or resets it if no color is specified</td>
         </tr>
         <tr>
          <td>javascript [code]</td><td>executes some JavaScript code. By default, the return value of the code is printed to the console, but that can be prevented by adding noreturn as the first parameter of the command</td>
         </tr>
       </table>
      `
  } else if (commands[0] == "info" || commands[0] == "i") {
    log.innerHTML += "<p style='color: " + color + "'>This console was made by ZOSK, a young amateur web and game developer. It was originally made in Codepen, and then moved to Github. That's why a lot of commands have to do with Codepen.<br>Check out my Twitter account <a style='color: " + color + ";' href='https://twitter.com/ZOSK17'>here</a>.</p><br>";
  } else if (commands[0] == "codepen" || commands[0] == "c") {
    if (commands[1]) {
      if (commands[2]) {
        window.open("https://codepen.io/ZOSK/" + encodeURIComponent(commands[2]) + "/" + encodeURIComponent(commands[1]));
      } else {
        window.open("https://codepen.io/ZOSK/pen/" + encodeURIComponent(commands[1]));
      }
    } else {
      window.open("https://codepen.io");
    }
  } else if (commands[0] == "codepenuser" || commands[0] == "cu") {
    if (commands[1]) {
      window.open("https://codepen.io/" + parameters + "/");
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No user specified.</p><br>";
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
        "<p style='color: red'>Error: No query specified.</p><br>";
    }
  } else if (commands[0] == "url") {
    if (commands[1]) {
      window.open(formatUrl(commands[1]));
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No url specified.</p><br>";
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
        "<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "urlinfo" || commands[0] == "urli") {
    if (commands[1]) {
      log.innerHTML += '<p style="color: ' + color + '">Information about ' + encodeURI(formatUrl(commands[1])) + '<br>' + getUrlInfo(commands[1]) + '</p><br>'
    } else {
      log.innerHTML +=
        "<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "embed") {
  
  } else if (commands[0] == "client") {
    $.getJSON('https://ipinfo.io/json', function(data) {
      /* 
        ip, city, region, country, loc, org
      */
      var ip = JSON.stringify(data.ip, null, 2);
      var city = JSON.stringify(data.city, null, 2);
      var region = JSON.stringify(data.region, null, 2);
      var country = JSON.stringify(data.country, null, 2);
      var location = JSON.stringify(data.loc, null, 2);
      var provider = JSON.stringify(data.org, null, 2);
    });
    log.innerHTML += `<p style="color: #33ff11;">Client information:</p><br>
       <table style="color: #33ff11;">
        <tr>
         <td>IP adress:</td><td>` + ip + `</td>
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
         <td>City:</td><td>` + city + `</td>
        </tr>
        <tr>
         <td>Region:</td><td>` + region + `</td>
        </tr>
        <tr>
         <td>Country:</td><td>` + country + `</td>
        </tr>
        <tr>
         <td>Location:</td><td>` + location + `</td>
        </tr>
        <tr>
         <td>Network provider:</td><td>` + provider + `</td>
        </tr>
        <tr>
         <td>Language:</td><td>` + navigator.language + `</td>
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
       </table>
       <br>`
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
  } else if (commands[0] == "color" || commands[0] == "col") {
    if (commands[1]) {
      color = parameters;
      log.innerHTML +=
        '<p style="color: ' +
        color +
        '">Color successfully set to ' +
        color +
        ".</p><br>";
    } else {
      color = "#22ff11";
      log.innerHTML +=
        '<p style="color: ' + color + '">Color successfully reset.</p><br>';
    }
  } else if (commands[0] == "js" || commands[0] == "javascript") {
    var syntaxError = false;
    if (commands[1]) {
      if (commands[1] == "noreturn" || commands[1] == "nr" || commands[1] == "nor") {
        if (commands[2]) {
          var parameters2 = command.substr(command.indexOf(commands[1]) + 2);
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
          '<p style="color: red">Error: No JavaScript code to execute.</p><br>';
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
      '<p style="color: red">Error: No JavaScript code to execute.</p><br>';
    }
  } else {
    log.innerHTML +=
      '<p style="color: red">Error: Unknown command ('+ command +'). Type help for command reference.</p><br>';
  }
  }
  window.scrollBy(0, 100000);
}

$("#input").keydown(function (e) {
  if (e.keyCode == 13) {
    submit();
  }
});

function formatUrl(url){
  var httpString = 'http://';
  var httpsString = 'https://';

  if (url.substr(0, httpString.length) !== httpString && url.substr(0, httpsString.length) !== httpsString) {
    url = httpsString + url;
  }
  return url;
}

function getUrlInfo(input_url) {
  $.get( "https://embedapi.com/api/embed", { "url" : "https://youtube.com/", "key" : "mRWoAB6R2TUGp3zp4nSLOi63FDCkd7OJduTe9aPR" }, function( data ) { var rdata = data } );
  return rdata;
}

window.onload = function () {
  input.focus();
};

function nWordsInStr(str) {
  return $.trim(str).split(" ").length;
}

function strToArr(str) {
  return str.trim().split(" ");
}
