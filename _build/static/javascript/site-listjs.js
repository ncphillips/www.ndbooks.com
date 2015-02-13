    
    var options = {
        valueNames: [ 'name', 'author','slug' , 'date', 'category', 'category1', 'category2', 'category3', 'category4', 'category5', 'tagline', 'last_name_sort', 'genre'],
        listClass: 'list-filter',
        page: 20000 // how many items should first show up on the page - affects performance
        // add tagline, or option for it?
    };

    var authorList = new List('container-filter', options);
    var booksList  = new List('container-filter-books', options);

    var optionsAll = {
        valueNames: [ 'name', 'slug' , 'category', 'category1', 'category2', 'category3', 'category4', 'category5', 'tagline', 'last_name_sort'],
        listClass: 'list-filter',
        page: 2 // how many items should first show up on the page - affects performance
        // add tagline, or option for it?
    };

    var allContent = new List('./data/api.json', optionsAll)


if (document.getElementById("filter-authors")) {
    document.getElementById("filter-authors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category1 == "Author" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }

if (document.getElementById("filter-translators")) {
    document.getElementById("filter-translators").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category2 == "Translator" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-contributors")) {
    document.getElementById("filter-contributors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category3 == "Contributor" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-editors")) {
    document.getElementById("filter-editors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category4 == "Editor" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-designers")) {
    document.getElementById("filter-designers").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category5 == "Designer" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
  //and clear the filters
  if (document.getElementById("filter-none-authors")) {
     document.getElementById("filter-none-authors").onclick=function(){
         authorList.filter();
        };
      }


// if (document.getElementById("filter-fiction")) {
//         document.getElementById("filter-fiction").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Fiction" ) {
//                  return true;
//                  } else {
//                  return false;
//               }

//           });
//         };
//       }

// if (document.getElementById("filter-nonfiction")) {
//     document.getElementById("filter-nonfiction").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Nonfiction" ) {
//                  return true;
//                  } else {
//                  return false;
//               }
//           });
//         };
//       }
// if (document.getElementById("filter-poetry")) {
//     document.getElementById("filter-poetry").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Poetry" ) {
//                  return true;
//                  } else {
//                  return false;
//               }
//           });
//         };
//       }
// if (document.getElementById("filter-theater")) {
//     document.getElementById("filter-theater").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Theater" ) {
//                  return true;
//                  } else {
//                  return false;
//               }
//           });
//         };
//       }

// if (document.getElementById("filter-forthcoming")) {
//     document.getElementById("filter-forthcoming").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Forthcoming" ) {
//                  return true;
//                  } else {
//                  return false;
//               }
//           });
//         };
//       }
//   if (document.getElementById("filter-bestsellers")) {
//         document.getElementById("filter-bestsellers").onclick=function(){
//             booksList.filter(function(item) {
//                if (item.values().category == "Best Sellers" ) {
//                  return true;
//                  } else {
//                  return false;
//               }
//           });
//         };
//       }
//   //and clear the filters
//   if (document.getElementById("filter-none")) {
//      document.getElementById("filter-none").onclick=function(){
//          booksList.filter();
//         };
//       }

// var booksList  = new List('container-filter-books', options);

// var filterBtns = $('input[name="filter"]');

// filterBtns.change(function() {
//   var validValues = [];

//   filterBtns.each(function() {

//     if ($(this).is(':checked')) {
//       validValues.push($(this).val());
//     }

//   });



//   booksList.filter(function(item) {


//      if (

//        (     (validValues.indexOf(item.values().date) > -1) && (validValues.indexOf(item.values().category) > -1)) || (validValues.indexOf(item.values().date) > -1) || (validValues.indexOf(item.values().category) > -1)


//       )
//      {
//       return true;

//     }





//     else {
//       return false;
//     }



//   });
// });
