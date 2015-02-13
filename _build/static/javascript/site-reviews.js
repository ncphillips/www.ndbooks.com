request = new XMLHttpRequest();
request.open('GET', '/data/reviews-output.json', true);

request.onreadystatechange = function() {
  if (this.readyState === 4){
    if (this.status >= 200 && this.status < 400){
      // Success!


    //Filter the data.reviews set for only those we want to show in the banner, and randomly show just one of them


            reviewsBanner = _.chain(data.reviews)
            .where({status: "house" })
            .sample(1)
              .value();


        // Create a template for how we want to display that review
          bannerReviewsTemplate = "<% _.each(reviewsBanner, function(review) { %>“<%= review.quote %>” <br />— <%= review.source %> (<%= review.related_book %>)<% }); %>";

        // Output the template to HTML (note where this particular technique came from because it's not obvious the value...?)
          output = _.template(bannerReviewsTemplate);
          result = output(data.reviews);

          //$("#container-review-single").html(result);
            //$(el).html(string);
          //el.innerHTML = string;
          document.getElementById('#container-review-single').innerHTML= result;




        //List out all the reviews to the review page
            // reviews =   _.chain(data.reviews)
            // .sortBy(function(review){return review.source})
            // .where({related_author: "roberto-bolano" })
            // .value();

        // Create a template for those reviews
            // reviewsTemplate = "<% _.each(reviews, function(review) { %>“<%= review.quote %>” <br />— <%= review.source %> on <%= review.related_author %> <hr /><% }); %>";

        // Output the template to HTML
              // outputReviewsList = _.template(reviewsTemplate);
              // resulReviewsList = outputReviewsList(data.reviews);
              // $("#container-review").html(resulReviewsList);












































      data = JSON.parse(this.responseText);
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;
