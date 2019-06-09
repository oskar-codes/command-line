var input = document.querySelector("#input");
var log = document.querySelector(".log");
var color = "#22ff11";
log.innerHTML =
"<p>Welcome to this little Codepen command line ! Start by typing help.</p><br>";
function submit() {
var command = input.value;
input.value = "";
var commands = strToArr(command);
var parameters = command.substr(command.indexOf(" ") + 1);
if (commands[0] == "help") {
log.innerHTML +=
'<p style="color: ' +
      color +
"\">Command list:<br>help: shows this help panel.<br>info: shows information about this console.<br>clear: clears the console<br>codepen [pen id] [view (pen,details,full,debug)]: browses to codepen, at the specified pen id, with the specified view.<br>codepenuser [user]: browses to the specified user's codepen profile.<br>codepensearch [query]: searches Codepen for your query.<br>url [url]: browses to the specified url.<br>cache [url] [view (full,text,source)]: browses to the cache of the specified url, and on the specified view.<br>google [query]: searches Google for your query.<br>youtube [query]: searches YouTube for your query.<br>github [query]: searches Github for your query.<br>print [text]: prints text to the console.<br>color [value]: sets the color of the console's text, or resets it if no color is specified.<br>js [code]: executes some JavaScript code.<br></p>";
  } else if (commands[0] == "info") {
log.innerHTML += "<p style='color: " + color + "'>This console was made by ZOSK, a young amateur web and game developer. It was originally made in Codepen, and then moved to Github. That's why a lot of commands have to do with Codepen.<br>Check out my Twitter account <a style='color: "+ color +";' href='https://twitter.com/ZOSK17'>here</a>.</p><br>";
  } else if (commands[0] == "codepen") {
if (commands[2]) {
window.open("https://codepen.io/ZOSK/" + encodeURIComponent(commands[2]) + "/" + encodeURIComponent(commands[1]));
    } else {
window.open("https://codepen.io/ZOSK/pen/" + encodeURIComponent(commands[1]));
    }
  } else if (commands[0] == "codepenuser") {
window.open("https://codepen.io/" + parameters) + "/";
  } else if (commands[0] == "codepensearch") {
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
window.open(commands[1]);
    } else {
log.innerHTML +=
"<p style='color: red'>Error: No url specified.</p><br>";
    }
  } else if (commands[0] == "cache") {
if (commands[1]) {
      if (commands[2] == "full") {
            window.open("http://webcache.googleusercontent.com/search?q=cache:"+ commands[1] +"&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      } else if (commands[2] == "text") {
            window.open("http://webcache.googleusercontent.com/search?q=cache:"+ commands[1] +"&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=1&vwsrc=0");
      } else if (commands[2] == "source") {
            window.open("http://webcache.googleusercontent.com/search?q=cache:"+ commands[1] +"&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=1");
      } else {
            window.open("http://webcache.googleusercontent.com/search?q=cache:"+ commands[1] +"&safe=active&client=safari&hl=en-ch&prmd=ivn&strip=0&vwsrc=0");
      }
} else {
      log.innerHTML +=
"<p style='color: red'>Error: No url specified.</p><br>";
}
  } else if (commands[0] == "google") {
if (commands[1]) {
window.open("https://google.com/search?q=" + encodeURIComponent(parameters));
    } else {
window.open("https://google.com")
    }
  } else if (commands[0] == "youtube") {
if (commands[1]) {
window.open("https://youtube.com/search?q=" + encodeURIComponent(parameters));
    } else {
window.open("https://youtube.com")
    }
  } else if (commands[0] == "github") {
if (commands[1]) {
window.open("https://github.com/search?q=" + encodeURIComponent(parameters));
    } else {
window.open("https://github.com")
    }
  } else if (commands[0] == "clear") {
log.innerHTML = "";
  } else if (commands[0] == "print") {
if (commands[1]) {
log.innerHTML +=
'<p style="color: ' + color + '">' + parameters + "</p><br>";
} else {
  log.innerHTML +=
'<p style="color: red">Error: no text to print.</p><br>';
}
  } else if (commands[0] == "color") {
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
  } else if (commands[0] == "js") {
if (commands[1]) {
var result = eval(parameters);
if (result) {
log.innerHTML +=
'<p style="color: ' + color + '">' + result + "</p><br>";
      }
log.innerHTML +=
'<p style="color: ' +
        color +
'">JavaScript code successfully executed.</p><br>';
    } else
log.innerHTML +=
'<p style="color: red">Error: no JavaScript code to execute.</p><br>';
    end;
  } else {
log.innerHTML +=
'<p style="color: red">Unknown command. Type help for command reference.</p><br>';
  }
window.scrollBy(0,100000);
}
$("#input").keydown(function(e) {
if (e.keyCode == 13) {
submit();
  }
});
window.onload = function() {
input.focus();
};
function nWordsInStr(str) {
return $.trim(str).split(" ").length;
}
function strToArr(str) {
return str.trim().split(" ");
}
