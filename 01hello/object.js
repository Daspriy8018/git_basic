//   var user={
//       firstname:"priyadarsan",
//       lastname:"das",
//       role:"admin",
//       facebooksignin:true,
//       rollno:23,  
//   }
//   console.log(user.firstname);
//   console.log(user["facebooksignin"]);
//   user.rollno=1
//   console.log(user.rollno);
//   user.firstname="yoyo"
//   console.log(user.firstname); 
//   console.log(user)


// var user={
//           firstname:"priyadarsan",
//           lastname:"das",
//           role:"admin",
//           facebooksignin:true,
//           rollno:23,  
//           courselist:[],
//           BuyCourse:function(CourseName){
//               this.courselist.push(CourseName);
//           },
//           getCourseCount: function(){
//               return `${this.firstname} is enrolled the total of ${this.courselist.length} courses `

//           },
          
//       };
//       console.log(user.getCourseCount());
//       user.BuyCourse("javascript")
//       user.BuyCourse("react-native")
//       console.log(user.getCourseCount());
      
      var user={
          firstName:"priyadarsan",
          lastname:"das",
          unacademy:"login",
          courselist:[],
          
          coursepurchases:function(NewCourses){
              this.courselist.push(NewCourses);
          },
          getCourseCount:function(){
              return `${this.firstName} purchases total no. of ${this.courselist.length} courses`
          },
          info:function(){
              return`${this.firstName}  ${this.lastname}  successfully ${this.unacademy} and enrolled the courses like ${this.courselist} and ${this.getCourseCount()}  `
          }
    
      }
console.log(user.getCourseCount())
user.coursepurchases("GATE")
user.coursepurchases("CAT")
user.coursepurchases("UPSC-CSE")
user.coursepurchases("UPSC-OPTIONAL")
console.log(user.courselist.length)
console.log(user.info())
      


      

