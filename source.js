var data=[
  {
    "company_name": "Zoho",
    "web_url": "https://www.zoho.com/",
    "founders": "Sridhar Vembu, Tony Thomas",
    "founded": "1996",
    "products": "Zoho Mail, Docs, CRM, SalesIQ, Books, Creator, Projects, Flow, Desk etc...",
    "industry": "SaaS Products",
    "career_page": "#",
    "logo": "https://www.zoho.com/images/zoho-logo-lp.png",
    "twitter_handle": "https://twitter.com/zoho"
  },
  {
    "company_name": "BankBazaar",
    "web_url": "http://www.bankbazaar.com/",
    "founders": "Adhil Shetty, Arjun Shetty, Rati Rajkumar",
    "founded": "2008",
    "products": "Personal Loans, Car Loans, Home Loans, Education Loans, Credit Cards, Fixed Deposits, Health Insurance, Life Insurance, Car Insurance, Cibil",
    "industry": "Finance",
    "career_page": "https://www.bankbazaar.com/careers.html",
    "logo": "https://www.bankbazaar.com/images/bankbazaar-logo.png",
    "twitter_handle": "https://twitter.com/BankBazaar"
  },
  {
    "company_name": "Freshworks",
    "web_url": "https://freshworks.com",
    "founders": "Girish Mathrubootham, Shan Krishnasamy",
    "founded": "2010",
    "products": "FreshDesk, FreshService, FreshSales, Freshcaller, Freshteam, Freshchat, Freshmarketter",
    "industry": "SaaS Products",
    "career_page": "https://freshworks.com/careers.html",
    "logo": "https://www.freshworks.com/assets/images/common/company/logos/logo-fworks-black-09bbb446.svg",
    "twitter_handle": "https://twitter.com/freshworksinc"
  },
  {
    "company_name": "Uniphore",
    "web_url": "https://www.uniphore.com/",
    "founders": "Umesh Sachdev, Ravi Saraogi",
    "founded": "2008",
    "products": "auMina, Akeira, amVoice",
    "industry": "Speech Recognition",
    "career_page": "https://www.uniphore.com/careers",
    "logo": "https://www.uniphore.com/wp-content/uploads/2015/10/logo1.png",
    "twitter_handle": "#"
  },
  {
    "company_name": "OrangeScape Inc., ",
    "web_url": "http://orangescape.com/",
    "founders": "Suresh Sambandam",
    "founded": "2003",
    "products": "KissFlow",
    "industry": "PaaS Products",
    "career_page": "https://grow.orangescape.com/",
    "logo": "http://orangescape.com/images/os_logo.png",
    "twitter_handle": "https://twitter.com/orangescape"
  },
  {
    "company_name": "Chargebee",
    "web_url": "https://www.chargebee.com/",
    "founders": "Rajaraman, Thiyagu, Saravanan KP, Krish Subramaniam",
    "founded": "2011",
    "products": "Subscription Management, Billing Invoicing, Payments, Reporting, Integrations",
    "industry": "Subscription Management",
    "career_page": "https://www.chargebee.com/careers/",
    "logo": "https://d2jxbtsa1l6d79.cloudfront.net/assets/web/10.0.7/images/brand/chargebee-logo-black.svg",
    "twitter_handle": "https://twitter.com/chargebee"
  },
  {
    "company_name": "Desicrew",
    "web_url": "http://desicrew.in/",
    "founders": "Saloni Malhotra",
    "founded": "2007",
    "products": "-",
    "industry": "-",
    "career_page": "http://desicrew.in/career/",
    "logo": "http://desicrew.in/wp-content/uploads/2018/02/dark-desicrew.png",
    "twitter_handle": "#"
  },
  {
    "company_name": "GoFrugal",
    "web_url": "https://www.gofrugal.com/",
    "founders": "Kumar Vembu",
    "founded": "2004",
    "products": "-",
    "industry": "-",
    "career_page": "https://careers.gofrugal.com/",
    "logo": "http://careers.gofrugal.com/images/gofrugal-logo-new.png",
    "twitter_handle": "#"
  }

];


$(document).ready(function() {
//  var s = JSON.stringify(data)
//alert(s);
  /*$.getJSON( s, function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });*/
let template="";
  jQuery.each(data, function(i, val) {
    console.log(val["company_name"]);
    let company_name=val["company_name"];
    let web_url=val["web_url"];
    let founders=val["founders"];
    let founded=val["founded"];
    let products=val["products"];
    let industry=val["industry"];
    let career_page=val["career_page"];
    let logo=val["logo"];
    let twitter_handle=val["twitter_handle"];
    console.log(founders);
    template+= '<div class="col-xs-12 col-sm-6 col-md-4">';
        template+= '<div class="image-flip" ontouchstart="this.classList.toggle(\"hover\");">';
            template+= '<div class="mainflip">';
                    template+= '<div class="frontside">';
                    template+= '<div class="card">';
                        template+= '<div class="card-body text-center">';
                            template+= '<p><img class=" img-fluid" src="'+ logo +'" alt="'+ company_name +' Logo"></p> <br> <br>';
                            template+= '<h4 class="card-title">'+ company_name +'</h4> <br> ';
                            template+= '<p class="card-text">'+ founders +'</p>';
                        template+= '</div>';
                    template+= '</div>';
                template+= '</div>';
                template+= '<div class="backside">';
                    template+= '<div class="card">';
                        template+= '<div class="card-body mt-4">';
                            template+= '<h4 class="card-title text-center">'+ company_name +'</h4>';
                            template+= '<p class="card-text">Founders/Co Founders: '+ founders +' </p>';
                            template+= '<p class="card-text">Website: <a target="_blank" href="'+ web_url+ '"> '+ web_url+ '</a> </p>';
                            template+= '<p class="card-text">Founded: '+ founded +' </p>';
                            template+= '<p class="card-text">Industry: '+ industry +'</p>';
                            template+= '<p class="card-text">Products: '+ products +'</p>';
                            if(career_page!="#"){
                              template+= '<p class="card-text">Job: <a target="_blank" href="'+ career_page + '"> Career page</a> </p>';
                            }

                            if(twitter_handle !="#"){
                              template+= '<ul class="list-inline  text-center">';

                                  template+= '<li class="list-inline-item  text-center">';
                                      template+= '<a class="social-icon text-xs-center" target="_blank" href="'+ twitter_handle+ '">';
                                          template+= '<i class="fa fa-twitter"></i>';
                                      template+= '</a>';
                                  template+= '</li>';

                              template+= '</ul>';
                            }



                        template+= '</div>';
                    template+= '</div>';
                template+= '</div>';
            template+= '</div>';
        template+= '</div>';
    template+= '</div>';
    template+= '<!-- ./Team member --><!-- Team member -->';
    //$("#" + i).append(document.createTextNode(" - " + val));
  });

// Add new company Card

template+= '<div class="col-xs-12 col-sm-6 col-md-4 add_new_company">';
    template+= '<div class="image-flip" ontouchstart="this.classList.toggle(\'hover\');">';
        template+= '<div class="mainflip">';
            template+= '<div class="frontside">';
                template+= '<div class="card">';
                    template+= '<div class="card-body text-center">';
                        template+= '<h4 class="card-title">Do you want to add more interesting startups?</h4>';
                        template+= '<p class="card-text"></p>';
                        template+= '<br>';
                        template+= '<br>';
                        template+= '<p class="card-text">It\'s easier than your imagination to be here...!<i class="fa fa-smile"></i></p>';
                        template+= '<br>';
                        template+= '<br>';
                        template+= '<a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>';
                    template+= '</div>';
                template+= '</div>';
            template+= '</div>';
            template+= '<div class="backside">';
                template+= '<div class="card">';
                    template+= '<div class="card-body mt-4">';

                        template+= '<p class="card-text">You are just a step away from adding to this awesome list <a href="https://docs.google.com/forms/d/e/1FAIpQLSfS96uzeqFcz-gdjLwhGn2i0prMk5-8MWBuxQMRgbN-thEJtw/viewform?usp=pp_url">Click here</a>. </p>';


                    template+= '</div>';
                template+= '</div>';
            template+= '</div>';
        template+= '</div>';
    template+= '</div>';
template+= '</div>';
<!-- ./Team member -->

$(".startups_list").html(template);
//$( ".add_new_company" ).prepend( template );

console.log("test");



});
