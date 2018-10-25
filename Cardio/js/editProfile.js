
    function updatedoctorProfile()
            {
                 firebase.auth().onAuthStateChanged(function(user){
                     if(user)
                     {
                         var userId = user.uid;
                         console.log(userId);

                             firebase.database().ref('Doctor/' + userId).once("value").then(function (snapshot) {
                                 var up = snapshot.val();
                                 var doctor_Name = up.doctorName;
                                 var doctor_Usename = up.doctorUsername;
                                 var doctor_Hospital = up.doctorHospital;
                                 var doctor_desig = up.doctorDesignation;
                                 var doctor_num = up.doctorNumber;
                                 var updatedDoctorName = document.getElementById('updateDoctor_name').value;
                                 var updatedDoctorUsename = document.getElementById('updateDoctor_username').value;
                                 var updatedDoctorHospital = document.getElementById('updateDoctor_hospital').value;
                                 var updatedDoctordesig = document.getElementById('updateDoctor_designation').value;
                                 var updatedDoctornum = document.getElementById('updateDoctor_num').value;
                                 console.log("hello " + updatedDoctorName + " " + updatedDoctorUsename + " " + updatedDoctorHospital);
                                 if(!updatedDoctorName) updatedDoctorName =doctor_Name;
                                 if(!updatedDoctorUsename) updatedDoctorUsename = doctor_Usename;
                                 if(!updatedDoctorHospital) updatedDoctorHospital = doctor_Hospital;
                                 if(!updatedDoctordesig) updatedDoctordesig = doctor_desig;
                                 if(!updatedDoctornum) updatedDoctornum=doctor_num
                                 firebase.database().ref('Doctor/' + userId).update({
                                     doctorName: updatedDoctorName,
                                     doctorUsername: updatedDoctorUsename,
                                     doctorHospital: updatedDoctorHospital,
                                     doctorDesignation: updatedDoctordesig,
                                     doctorNumber: updatedDoctornum
                                 }).then(function () {
                                     alert("Profile updated successfully");
                                 }).catch(function (error) {
                                     console.log("Update failed");
                                 });
                                 var user = firebase.auth().currentUser;


                             });
                         }




                 });

            }
             function updatepatientProfile()
            {
                 firebase.auth().onAuthStateChanged(function(user){
                     if(user)
                     {
                         var userId = user.uid;
                         console.log(userId);


                             firebase.database().ref('Patient/' + userId).once("value").then(function (snapshot) {
                                 var up = snapshot.val();
                                 var patient_Name = up.patientName;
                                 var patient_Usename = up.patientUsername;
                                 var patient_age = up.patientAge;
                                 var patient_num = up.patientNumber;
                                 console.log(patient_Name+" "+patient_Usename );
                                 var updatedpatientName = document.getElementById('updatePatient_name').value;
                                 var updatedpatientUsename = document.getElementById('updatePatient_username').value;
                                 var updatedpatientAge = document.getElementById('updatePatient_age')
                                 var updatedpatientnum = document.getElementById('updatePatient_num').value;
                                 if(!updatedpatientName) updatedpatientName= patient_Name;
                                 if(!updatedpatientUsename) updatedpatientUsename = patient_Usename;

                                 if(!updatedpatientAge) updatedpatientAge=patient_age;
                                 if(!updatedpatientnum) updatedpatientnum=patient_num
                                 console.log("hello " + updatedpatientName + " " + updatedpatientUsename + " " + updatedpatientAge);

                                 firebase.database().ref('Patient/' + userId).update({
                                     patientName: updatedpatientName,
                                     patientUsername: updatedpatientUsename,
                                     patientAge : updatedpatientAge,
                                     patientNumber: updatedpatientnum
                                 }).then(function () {
                                     alert("Profile updated successfully");
                                 }).catch(function (error) {
                                     console.log("Update failed");
                                 });
                                 var user = firebase.auth().currentUser;

                             });
                         }

                         });
            }

            function updatesellerProfile()
            {
                 firebase.auth().onAuthStateChanged(function(user){
                     if(user)
                     {
                         var userId = user.uid;
                         console.log(userId);
                         firebase.database().ref('Seller/' + userId).once("value").then(function (snapshot) {
                                 var up = snapshot.val();
                                 var seller_Name = up.sellerName;
                                 var seller_Usename = up.sellerUsername;
                                 var seller_num = up.sellerNumber;
                                 var seller_phar = up.sellerPharmacy;
                                 console.log(seller_Name+" "+seller_Usename );
                                 var updatedsellerName = document.getElementById('updateSeller_name').value;
                                 var updatedsellerUsename = document.getElementById('updateSeller_username').value;
                                 var updatedsellerPharmacy = document.getElementById('updateSeller_pharm').value;
                                 var updatedsellernum = document.getElementById('updateSeller_num').value;
                                 if(!updatedsellerName) updatedsellerName= seller_Name;
                                 if(!updatedsellerUsename) updatedsellerUsename = seller_Usename;
                                 if(!updatedsellerPharmacy) updatedsellerPharmacy = seller_phar;
                                 if(!updatedsellernum) updatedsellernum=seller_num;
                                 console.log("hello " + updatedsellerName + " " + updatedsellerUsename + " ");

                                 firebase.database().ref('Seller/' + userId).update({
                                     sellerName: updatedsellerName,
                                     sellerUsername: updatedsellerUsename,
                                     sellerPharmacy: updatedsellerPharmacy,
                                     sellerNumber: updatedsellernum
                                 }).then(function () {
                                     alert("Profile updated successfully");
                                 }).catch(function (error) {
                                     console.log("Update failed");
                                 });
                                 var user = firebase.auth().currentUser;


                                 /*user.updatePassword(pass).then(function() {
                                   console.log("Password changed");
                                 }, function(error) {
                                   console.log("Error in chnaging password");
                                 });*/
                                 /*var file = document.getElementById('propic').files[0];
                                 if(!file)
                                 {
                                     alert("Select a photo before clicking open");
                                 }
                                 else
                                 {
                                     var metadata = {
                                      contentType: file.type,
                                    };
                                    console.log(file.name);
                                    var uploadTask = firebase.storage().ref().child('UserProPics/'+file.name).put(file, metadata);
                                    uploadTask.on('state_changed', function(snapshot){
                                      // Observe state change events such as progress, pause, and resume
                                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                      alert('Upload is ' + progress + '% done');
                                      switch (snapshot.state) {
                                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                                          console.log('Upload is paused');
                                          break;
                                        case firebase.storage.TaskState.RUNNING: // or 'running'
                                          console.log('Upload is running');
                                          break;
                                      }
                                    }, function(error) {
                                      console.log("ERROR");
                                    }, function() {
                                      alert("Photo uploaded successfully");
                                      var downloadURL = uploadTask.snapshot.downloadURL;
                                      firebase.database().ref('members/'+userId).update({
                                          prourl : downloadURL
                                      }).then(function(){
                                          window.location.href="userProfile.html";
                                      }).catch(function(error){
                                          console.log("Error in loading");
                                      });

                                    });
                                 }*/


                             });
                         }

                         });
            }