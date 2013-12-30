
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 //EN">
<HTML>
  <HEAD>
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Expires" CONTENT="-1">
    <META HTTP-EQUIV="Last-Modified" CONTENT="Sun, 01 Oct 2000 05:05:05 GMT">




  <script language="JavaScript" SRC="/include/scripts/validationutil.js"></script>
  <script language="JavaScript" SRC="/include/scripts/util.js"></script>
  <script language="JavaScript" SRC="/include/scripts/menuutil.js"></script>
  <script language="JavaScript" SRC="/include/scripts/preload.js"></script>
  <script language="JavaScript" SRC="/include/scripts/browsercheck.js"></script>

<link rel="stylesheet" href="/theme/tdmaster.css">

<script type="text/javascript" language="JavaScript" >
   if (is_ie4up || is_nav4up)
   {
   
	      document.write('<link rel="stylesheet" href="/theme/tdextended.css">');
	      
   }
</script>

	







  <TITLE>Topdanmark</TITLE>
  

<script type="text/javascript">
  /* <![CDATA[ */
    function gup( varname ) {      
      varname = varname.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");     
      var regexS = "[\\?&]"+varname+"=([^&#]*)";      
      var regex = new RegExp( regexS );      
      var results = regex.exec( window.location.href );      
      if( results == null ) return ""; else return results[1];
  }
    /* ]]> */
</script>




<!-- START Globale WA variable -->
    
    
<script type="text/javascript">  
          
    //<![CDATA[
      //indlæs særligt genereret titel i variabel old_waTitle (old Web Analytics Title) til bagudkompatibilitet
      var old_waTitle = 'Topdanmark - '+  gup('id');
      //indlæs særligt genereret titel i variabel waTitle (Web Analytics Title)
      var waTitle = 'Topdanmark - '+ gup('id');
      document.title = waTitle;
    //]]>
    </script>
  <!-- END Globale WA variable -->

  <!-- START GA/Urchin -->
    <script type="text/javascript">
    /* <![CDATA[ */

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-19772404-1']); // UA-code 2
      // Set the current domain as the GAdomain
      split = location.hostname.split("://").pop().split("/").shift().split(".");
      GAdomain = split[split.length-2] + "." + split[split.length-1];
      _gaq.push(['_setDomainName', GAdomain]);
      _gaq.push(['_setAllowHash',false]);
      _gaq.push(['_setAllowLinker',true]);     
      /* the virtual URL is stored in the var waPath */ 
      _gaq.push(['_trackPageview']); // track the virtual URL frame
      
      _gaq.push(['topnet._setAccount', 'UA-19772404-7']); // UA-code = topnet.dk
      // Set the current domain as the GAdomain
      split = location.hostname.split("://").pop().split("/").shift().split(".");
      GAdomain = split[split.length-2] + "." + split[split.length-1];
      _gaq.push(['topnet._setDomainName', GAdomain]);
      _gaq.push(['topnet._setAllowHash',false]);
      _gaq.push(['topnet._setAllowLinker',true]);    
      /* the virtual URL is stored in the var waPath */ 
      _gaq.push(['topnet._trackPageview']); // track the virtual URL framehead

      _gaq.push(['global._setAccount', 'UA-19772404-9']); // UA-code = global
      // Set the current domain as the GAdomain
      split = location.hostname.split("://").pop().split("/").shift().split(".");
      GAdomain = split[split.length-2] + "." + split[split.length-1];
      _gaq.push(['global._setDomainName', GAdomain]);
      _gaq.push(['global._setAllowHash',false]);
      _gaq.push(['global._setAllowLinker',true]);
      _gaq.push(['global._setLocalRemoteServerMode']); // Urchin
      _gaq.push(['global._setLocalGifPath', 'https://www.topnet.dk/image/__utm.gif']); // Please verify the path to __utm.gif
      /* the virtual URL is stored in the var waPath */ 
      _gaq.push(['global._trackPageview']); // track the virtual URL  

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

  </script>
  
  <script type="text/javascript">
  function trackLinks(){
    // Set the name of the top domain here, ex. ?domain.com?
    topdomain = "topnet.dk";
    // Domains which should have cookies from the topdomain passed
    // Seperate each domain with a comma (?,?) and quote each domain
    // Ex. ?another_domain.com?,?another2_comain.com?
    extDomains = new Array("topdanmark.dk","danskeforsikring.dk");
    // Current domain
    domainSplit = location.hostname.split("/").shift().split(".");
    domain = domainSplit[domainSplit.length-2] + "." + domainSplit[domainSplit.length-1];
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
      links[i].onclick = function(){
        // The domain of the href
        tmp = this.href;
        domainSplit = tmp.split("://").pop().split("/").shift().split(".");
        linkdomain = domainSplit[domainSplit.length-2] + "." + domainSplit[domainSplit.length-1];
        
        // If this is the topdomain, pass the cookie to the domains in the extDomains array
        if(topdomain == domain){
          matchIndex = -1;
          for(var j = 0; j < extDomains.length; j++){
            if(linkdomain == extDomains[j]) matchIndex = j;
          }
          if(matchIndex != -1){
            _gaq.push(['_link', tmp]); return false;
          }
        }
         // Else if this is not the topdomain but the link is linking to it, pass the cookie
        else if(linkdomain == topdomain){
          _gaq.push(['_link', tmp]); return false;
        }
      }
    }
  }
  window.onLoad = trackLinks();
    
  <!-- End Google Analytics -->
      
    /* ]]> */
    </script>
  <!-- END GA/Urchin -->
  

  </HEAD>
<!--  // If inside frameset, check for cookies and fetch contents 
  // If not, load frameset and log user off -->
  <SCRIPT LANGUAGE="JavaScript">
  <!--
    if(top != self){ 
      document.location.href="/td/servlet/KundeMappe?topcmd=3&stamp=1379420883300"  
      } else {
      var newFrameSet = "<frameset border=0 rows='*,0' onload=window.status=''>"
      newFrameSet += "<frame src='/td/servlet/KundeMappe?topcmd=2&stamp=1379420883300' name='contents' >"
      

      newFrameSet += "</frameset>"
      document.write(newFrameSet)
      document.close()
      }
  // -->    
  </script>
  <noscript>
    <body>
			<h1>
					Javascript er ikke slået til
			</h1>
			<p>
					Du kan ikke få adgang til kundemappen med dine personlige oplysninger på www.Topdanmark.dk, fordi du ikke har slået javascript til i din browser.
			</p>
			<p>
				<b>
						Hvad kan du gøre?
				</b>
						For at få adgang til kundemappen skal du slå javascript til i din browsers sikkerhedsopsætning. 
			</p>
			


<!-- START Netminers -->
    
  <!-- END Netminers -->  

		</body>


  </noscript>

  <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
  <META HTTP-EQUIV="Expires" CONTENT="-1">
  <META HTTP-EQUIV="Last-Modified" CONTENT="Sun, 01 Oct 2000 05:05:05 GMT">
</HTML>
