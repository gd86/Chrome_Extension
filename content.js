/*Contect Script*/

var mainContent;
(
    function (mainContent)
    {
        /*Table of nouns to be searched*/
        var nouns  =   ["people","history","way","art","world","information","map","two","family","government","health",  "system",
                        "computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory",
                        "law","bird","literature","problem","software","control","knowledge","power","ability","economics","love",
                        "internet","television","science","library","nature","fact","product","idea","temperature","investment",
                        "area","society","activity","story","industry","media","thing","oven","community","definition","safety",
                        "quality","development","language","management","player","variety","video","week","security","country",
                        "exam","movie","organization","equipment","physics","analysis","policy","series","thought","basis",
                        "boyfriend","direction","strategy","technology","army","camera","freedom","paper","environment",
                        "child","instance","month","truth","marketing","university","writing","article","department","difference",
                        "goal","news","audience","fishing","growth","income","marriage","user","combination","failure","meaning",
                        "medicine","philosophy","teacher","communication","night","chemistry","disease","disk","energy","nation",
                        "road","role","soup","advertising","location","success","addition","apartment","education","math","moment",
                        "painting","politics","attention","decision","event","property","shopping","student","wood","competition",
                        "distribution","entertainment","office","population","president","unit","category","cigarette","context",
                        "introduction","opportunity","performance","driver","flight","length","magazine","newspaper","relationship",
                        "teaching","cell","dealer","finding","lake","member","message","phone","scene","appearance","association",
                        "concept","customer","death","discussion","housing","inflation","insurance","mood","woman","advice","blood",
                        "effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement",
                        "wealth","application","city","county","depth","estate","foundation","grandmother","heart","perspective","photo",
                        "recipe","studio","topic","collection","depression","imagination","passion","percentage","resource","setting",
                        "ad","agency","college","connection","criticism","debt","description","memory","patience","secretary","solution",
                        "administration","aspect","attitude","director","personality","psychology","recommendation","response","selection",
                        "storage","version","alcohol","argument","complaint","contract","emphasis","highway","loss","membership","possession",
                        "preparation","steak","union","agreement","cancer","currency","employment","engineering","entry","interaction","mixture",
                        "preference","region","republic","tradition","virus","actor","classroom","delivery","device","difficulty","drama",
                        "election","engine","football","guidance","hotel","owner","priority","protection","suggestion","tension","variation",
                        "anxiety","atmosphere","awareness","bath","bread","candidate","climate","comparison","confusion","construction",
                        "elevator","emotion","employee","employer","guest","height","leadership","mall","manager","operation","recording",
                        "sample","transportation","charity","cousin","disaster","editor","efficiency","excitement","extent","feedback",
                        "guitar","homework","leader","mom","outcome","permission","presentation","promotion","reflection","refrigerator",
                        "resolution","revenue","session","singer","tennis","basket","bonus","cabinet","childhood","church","clothes",
                        "coffee","dinner","drawing","hair","hearing","initiative","judgment","lab","measurement","mode","mud","orange",
                        "poetry","police","possibility","procedure","queen","ratio","relation","restaurant","satisfaction","sector",
                        "signature","significance","song","tooth","town","vehicle","volume","wife","accident","airport","appointment",
                        "arrival","assumption","baseball","chapter","committee","conversation","database","enthusiasm","error","explanation",
                        "farmer","gate","girl","hall","historian","hospital","injury","instruction","maintenance","manufacturer","meal",
                        "perception","pie","poem","presence","proposal","reception","replacement","revolution","river","son","speech",
                        "tea","village","warning","winner","worker","writer","assistance","breath","buyer","chest","chocolate",
                        "conclusion","contribution","cookie","courage","dad","desk","drawer","establishment","examination","garbage","grocery","honey",
                        "impression","improvement","independence","insect","inspection","inspector","king","ladder","menu","penalty","piano",
                        "potato","profession","professor","quantity","reaction","requirement","salad","sister","supermarket","tongue","weakness",
                        "wedding","affair","ambition","analyst","apple","assignment","assistant","bathroom","bedroom","beer","birthday",
                        "celebration","championship","cheek","client","consequence","departure","diamond","dirt","ear","fortune","friendship",
                        "funeral","gene","girlfriend","hat","indication","intention","lady","midnight","negotiation","obligation","passenger",
                        "pizza","platform","poet","pollution","recognition","reputation","shirt","sir","speaker","stranger","surgery",
                        "sympathy","tale","throat","trainer","uncle","youth","time","work","film","water","money",
                        "example","while","business","study","game","life","form","air","day","place","number",
                        "part","field","fish","back","process","heat","hand","experience","job","book","end",
                        "point","type","home","economy","value","body","market","guide","interest","state","radio",
                        "course","company","price","size","card","list","mind","trade","line","care","group",
                        "risk","word","fat","force","key","light","training","name","school","top","amount",
                        "level","order","practice","research","sense","service","piece","web","boss","sport","fun",
                        "house","page","term","test","answer","sound","focus","matter","kind","soil","board",
                        "oil","picture","access","garden","range","rate","reason","future","site","demand","exercise",
                        "image","case","cause","coast","action","age","bad","boat","record","result","section",
                        "building","mouse","cash","class","nothing","period","plan","store","tax","side","subject",
                        "space","rule","stock","weather","chance","figure","man","model","source","beginning","earth",
                        "program","chicken","design","feature","head","material","purpose","question","rock","salt","act",
                        "birth","car","dog","object","scale","sun","note","profit","rent","speed","style",
                        "war","bank","craft","half","inside","outside","standard","bus","exchange","eye","fire",
                        "position","pressure","stress","advantage","benefit","box","frame","issue","step","cycle","face",
                        "item","metal","paint","review","room","screen","structure","view","account","ball","discipline",
                        "medium","share","balance","bit","black","bottom","choice","gift","impact","machine","shape",
                        "tool","wind","address","average","career","culture","morning","pot","sign","table","task",
                        "condition","contact","credit","egg","hope","ice","network","north","square","attempt","date",
                        "effect","link","post","star","voice","capital","challenge","friend","self","shot","brush",
                        "couple","debate","exit","front","function","lack","living","plant","plastic","spot","summer",
                        "taste","theme","track","wing","brain","button","click","desire","foot","gas","influence",
                        "notice","rain","wall","base","damage","distance","feeling","pair","savings","staff","sugar",
                        "target","text","animal","author","budget","discount","file","ground","lesson","minute","officer",
                        "phase","reference","register","sky","stage","stick","title","trouble","bowl","bridge","campaign",
                        "character","club","edge","evidence","fan","letter","lock","maximum","novel","option","pack",
                        "park","plenty","quarter","skin","sort","weight","baby","background","carry","dish","factor",
                        "fruit","glass","joint","master","muscle","red","strength","traffic","trip","vegetable","appeal",
                        "chart","gear","ideal","kitchen","land","log","mother","net","party","principle","relative",
                        "sale","season","signal","spirit","street","tree","wave","belt","bench","commission","copy",
                        "drop","minimum","path","progress","project","sea","south","status","stuff","ticket","tour",
                        "angle","blue","breakfast","confidence","daughter","degree","doctor","dot","dream","duty","essay",
                        "father","fee","finance","hour","juice","limit","luck","milk","mouth","peace","pipe",
                        "seat","stable","storm","substance","team","trick","afternoon","bat","beach","blank","catch",
                        "chain","consideration","cream","crew","detail","gold","interview","kid","mark","match","mission",
                        "pain","pleasure","score","screw","sex","shop","shower","suit","tone","window","agent",
                        "band","block","bone","calendar","cap","coat","contest","corner","court","cup","district",
                        "door","east","finger","garage","guarantee","hole","hook","implement","layer","lecture","lie",
                        "manner","meeting","nose","parking","partner","profile","respect","rice","routine","schedule","swimming",
                        "telephone","tip","winter","airline","bag","battle","bed","bill","bother","cake","code",
                        "curve","designer","dimension","dress","ease","emergency","evening","extension","farm","fight","gap",
                        "grade","holiday","horror","horse","host","husband","loan","mistake","mountain","nail","noise",
                        "occasion","package","patient","pause","phrase","proof","race","relief","sand","sentence","shoulder",
                        "smoke","stomach","string","tourist","towel","vacation","west","wheel","wine","arm","aside",
                        "associate","bet","blow","border","branch","breast","brother","buddy","bunch","chip","coach",
                        "cross","document","draft","dust","expert","floor","god","golf","habit","iron","judge",
                        "knife","landscape","league","mail","mess","native","opening","parent","pattern","pin","pool",
                        "pound","request","salary","shame","shelter","shoe","silver","tackle","tank","trust","assist",
                        "bake","bar","bell","bike","blame","boy","brick","chair","closet","clue","collar",
                        "comment","conference","devil","diet","fear","fuel","glove","jacket","lunch","monitor","mortgage",
                        "nurse","pace","panic","peak","plane","reward","row","sandwich","shock","spite","spray",
                        "surprise","till","transition","weekend","welcome","yard","alarm","bend","bicycle","bite","blind",
                        "bottle","cable","candle","clerk","cloud","concert","counter","flower","grandfather","harm","knee",
                        "lawyer","leather","load","mirror","neck","pension","plate","purple","ruin","ship","skirt",
                        "slice","snow","specialist","stroke","switch","trash","tune","zone","anger","award","bid",
                        "bitter","boot","bug","camp","candy","carpet","cat","champion","channel","clock","comfort",
                        "cow","crack","engineer","entrance","fault","grass","guy","hell","highlight","incident","island",
                        "joke","jury","leg","lip","mate","motor","nerve","passage","pen","pride","priest",
                        "prize","promise","resident","resort","ring","roof","rope","sail","scheme","script","sock",
                        "station","toe","tower","truck","witness",];
        var highlights = [];
        var cur = 0;
        /*code for status message shown at left top*/
        var StatusSpan = (function ()
                        {
                           function StatusSpan() 
                           {
                                var _this = this;
                                this.span = document.createElement('span');
                                this.span.className = "statusclass";

                                this.span.addEventListener('mouseover', function (event) {_this.span.style.opacity = "0";});
                                this.span.addEventListener('mouseout', function (event) {_this.span.style.opacity = "1";});
                            }
                            StatusSpan.prototype.setText = function (text) {this.span.innerHTML = text;};

                            StatusSpan.prototype.remove = function () 
                            {
                                if (this.span.parentNode) 
                                {
                                    this.span.parentNode.removeChild(this.span);
                                }
                            };

                            StatusSpan.prototype.add = function ()
                            {
                                if (!this.span.parentNode) 
                                {
                                    document.getElementsByTagName('body')[0].appendChild(this.span);
                                }
                            };
                            return StatusSpan;
                        })();
        var statusSpan = new StatusSpan();

        function search(exp) 
        {
           /*Get full body element*/
           var bodyhtml = document.getElementsByTagName('body')[0];
           bodyhtml.normalize();
           /*Recursively search a sigle noun*/
           matchRecurrsively(bodyhtml, exp);
           
           if (highlights.length > 0)
           {
               if (!elementInViewport(highlights[cur])) 
               {
                    /*Scroll the page to the top*/
                   $('body').scrollTop($(highlights[cur]).offset().top - 20);
               }
            }
        }

        function matchRecurrsively(elem, regexp) 
        {
            if (elem.nodeName    == "MARK"     || 
                elem.nodeName    == "SCRIPT"   || 
                elem.nodeName    == "NOSCRIPT" || 
                elem.nodeName    == "STYLE"    || 
                elem.nodeType    == Node.COMMENT_NODE) 
            {
               return;
            }

            if (elem.id == 'statusclass') 
            {
               return;
            }

            if (elem.nodeType != Node.TEXT_NODE) 
            {
                var displaycss = $(elem).css('display');
                if (displaycss == 'none' || displaycss == 'hidden') 
                {
                    return;
                }
            }

            if (elem.childNodes.length > 0) 
            {
                for (var i = 0; i < elem.childNodes.length; i++) 
                {
                    matchRecurrsively(elem.childNodes[i], regexp);
                }
            }

            if (elem.nodeType == Node.TEXT_NODE && 
                elem.nodeValue.trim() !== '') 
            {
                var str     = elem.nodeValue;    /*get current node value in string format*/
                var matches = str.match(regexp); /*match the noun string with body text*/
                var parent  = elem.parentNode;   /*get parent node*/

                if (matches !== null) 
                {
                    var pos = 0;
                    var mark;
                    for (var i = 0; i < matches.length; i++) 
                    {
                        /*Get position index of noun*/
                        var index = str.indexOf(matches[i], pos);
                        /*get parent of the node contains noun*/
                        var before = document.createTextNode(str.substring(pos, index));
                        pos = index + matches[i].length;

                        if (elem.parentNode == parent) 
                        {
                            parent.replaceChild(before, elem);
                        } 
                        else 
                        {
                            parent.insertBefore(before, mark.nextSibling);
                        }

                        mark = document.createElement('mark');  /*Highlight the text in page*/
                        mark.appendChild(document.createTextNode(matches[i]));

                        parent.insertBefore(mark, before.nextSibling);
                        highlights.push(mark);
                    }
                    var after = document.createTextNode(str.substring(pos));
                    parent.insertBefore(after, mark.nextSibling);
                }
            }
        }


        function elementInViewport(el)
        {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent)
           {
              el = el.offsetParent;
              top += el.offsetTop;
              left += el.offsetLeft;
           }
           return top >= window.pageYOffset && left >= window.pageXOffset && (top + height) <= (window.pageYOffset + window.innerHeight) && (left + width) <= (window.pageXOffset + window.innerWidth);
        }
        var count = 0;
        function startHighlight()
        {
            var exppram;
            for(var i=0; i<nouns.length; i++)
            {
                setTimeout(function () 
                {
                   statusSpan.setText("Searching : " + nouns[count] + " ...");
                   exppram = new RegExp("\\b" + nouns[count] + "\\b", "gi");
                   search(exppram)
                   count++;
                   exppram = null;
                   if(count >= nouns.length) /*Searching All Noun Done*/
                   {
                      count = 0;
                      statusSpan.setText("Completed.");
                      setTimeout(function (){statusSpan.remove()},2000);
                   }
                },10)
            }
            
            /*Send message to background script*/
            chrome.extension.sendRequest({message: "highlightcompleted"}, function(response) {});
        }

        function clearHighlight()
        {
            statusSpan.add();
            statusSpan.setText("Clearing...");
            setTimeout(function () 
            {
               cur = 0;
               for (var i = 0; i < highlights.length; i++) 
               {
                   var mark1 = highlights[i];
                   if(null != mark1)
                      mark1.parentNode.replaceChild(mark1.firstChild, mark1);
                }
                highlights.length = 0;
            }, 200);
        }        

        /*Receive message from background script*/
        chrome.extension.onMessage.addListener(function(msg, sender, sendResponse)
        {
            if (msg.action == 'highlight') 
            {
                /*Clear all the current highlights*/
                clearHighlight();
                statusSpan.setText("Searching ...");
                setTimeout(function (){startHighlight();}, 500);
            }
        })
        /*Send message to background script*/
        chrome.extension.sendRequest({message: "loaded"}, function(response) {});
        
    }
)(mainContent || (mainContent = {}));