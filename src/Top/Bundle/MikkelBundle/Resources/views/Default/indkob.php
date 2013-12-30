<div class="rmo-simple" bgcolor="red">
	<h2>Din indk�bskurv:</h2>
<div style="display: none">

</div style="background-color:lightblue;">

<script>
$(document).ready(function(){
  $("fg").click(function(){
    $(this).remove();
  });
});
</script>

</head>
<body>

<script>
$(document).ready(function(){
  $("#btn3").click(function(){
    $("fg").remove();
  });
});
</script>
    
    
<script>
$(document).ready(function(){

  $(".addforsikring").click(function(event){
      var id = $(event.target).attr('data-product-id');
      
      console.log(id);
    $("fg").prepend("<li>+ " +id+ " /t FJERN + <a href=www.google.dk"+"smart"+"</a> </li>");
  });
});
</script>

<li class="timetocall">Dine vare:</li>
 
<fg>
</fg>
<center>
    <button class="link">slet alt</button>
</center>

		<input type="hidden" name="tx_topdkrmo_simpleform[identifier]" value="6466067" />
		<input type="hidden" name="tx_topdkrmo_simpleform[rKey]" value="0ef4cb806b0e34ed8e33895db6457e29" />
		<ol>
		<br>
			<a id="btn3">TØM KURV</a>
			<li><input class="submit" type="submit" name="tx_topdkrmo_simpleform[submit]" value="K�b" /></li>
			<center>
			<a href="www.google.dk">GEM KURV</a>
			</center>
				
		</ol>
		
	</form>