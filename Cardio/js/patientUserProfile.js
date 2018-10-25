window.addEventListener("load",function () {



	//window.onload = function () {
		var a = document.getElementById("sup");
		var out = document.getElementById("sout");
		var headarName = document.getElementById("pProfileName");
		var age = document.getElementById("pAge");
		var uname = document.getElementById("pUname");
		var name = document.getElementById("pFname");
		var em = document.getElementById("pEmail");
		var phNo = document.getElementById("pPnum");
		 firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
			var userId = user.uid;
			firebase.database().ref('/Patient/' + userId).once('value').then(function(snapshot) {
				userProperty=snapshot.val();

				a.innerHTML = userProperty.patientUsername;
				//a.href = "profile.html";

				//so.innerHTML = "Sign Out";
				//so.setAttribute("data-hover","Sign Out");
				/*if(userProperty.type === "admin")
				{
					ad.innerHTML = "ADMIN";
					ad.setAttribute("data-hover","ADMIN");
				}*/
				console.log(userProperty.patientName);
				headarName.innerHTML = userProperty.patientName;
				uname.innerHTML = userProperty.patientUsername;
				name.innerHTML = userProperty.patientName;
				phNo.innerHTML = userProperty.patientNumber;
				em.innerHTML = userProperty.patientEmail;
				age.innerHTML =userProperty.patientAge;
				//var course = userProperty.courses;

				/*var member = userProperty.memberOf;
				if(member)
				{
					var s = "";
					var i;
					for(i=0;i<member.length;i++)
					{
						if(member[i] === ' ')
						{
							var p1 = document.createElement("P");
							var t1 =  document.createTextNode(s);
							p1.appendChild(t1);
							mem.appendChild(p1);
							s="";
						}
						else if(i==(member.length-1))
						{
							s+=member[i];
							var p1 = document.createElement("P");
							var t1 =  document.createTextNode(s);
							p1.appendChild(t1);
							mem.appendChild(p1);
						}
						else
						{
							s+=member[i];
						}
					}

				}
				else
				{
					var p1 = document.createElement("P");
					var t1 =  document.createTextNode("none");
					p1.appendChild(t1);
					mem.appendChild(p1);
				}*/
				/*var pro = userProperty.prourl;
				if(pro)
				{
					var img = document.getElementById("propic");
					img.src = pro;
				}
				else
				{
					var img = document.getElementById("propic");
					img.src = "https://firebasestorage.googleapis.com/v0/b/automation-c28ac.appspot.com/o/UserProPics%2Fano.jpg?alt=media&token=73d028c8-bd28-4456-bf3d-70ca66c6224f";
				}*/


			});


		  }
	});


	}, false);