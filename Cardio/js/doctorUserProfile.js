	window.onload = function () {
		var a = document.getElementById("sup");
		var out = document.getElementById("sout");
		var headarName = document.getElementById("profileName");
		var headerProf = document.getElementById("profession");
		var headerHos = document.getElementById("hospital");
		var uname = document.getElementById("Uname");
		var name = document.getElementById("Fname");
		var em = document.getElementById("email");
		var phNo = document.getElementById("Pnum");
		var desi = document.getElementById("desig");
		 firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
			var userId = user.uid;
			firebase.database().ref('/Doctor/' + userId).once('value').then(function(snapshot) {
				userProperty=snapshot.val();

				a.innerHTML = userProperty.doctorUsername;
				//a.href = "profile.html";

				//so.innerHTML = "Sign Out";
				//so.setAttribute("data-hover","Sign Out");
				/*if(userProperty.type === "admin")
				{
					ad.innerHTML = "ADMIN";
					ad.setAttribute("data-hover","ADMIN");
				}*/
				console.log(userProperty.doctorName);
				headarName.innerHTML = userProperty.doctorName;
				headerProf.innerHTML = userProperty.doctorDesignation;
				headerHos.innerHTML = userProperty.doctorHospital;
				uname.innerHTML = userProperty.doctorUsername;
				name.innerHTML = userProperty.doctorName;
				em.innerHTML = userProperty.doctorEmail;
				phNo.innerHTML = userProperty.doctorNumber;
				desi.innerHTML = userProperty.doctorDesignation;
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

	}